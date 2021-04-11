const Novel = require('../models/Novel');
const Chapter = require('../models/Chapter');
const { response } = require('express');

exports.showChapter = (req, res, next) => {
  Chapter.findById({ _id: req.params.chapterId })
    .then((chapter) => {
      //console.log('chapter  : ', chapter);
      // if (chapter.length != 0)
      res.json(chapter);
      // else res.json(null);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ nonovelfound: 'No novel found with that ID' });
      }
    });
};
exports.showPrevChapter = (req, res, next) => {
  Chapter.find({
    novelId: req.params.novelId,
    no: req.params.chapterId,
  })
    .then((chapter) => {
      //console.log('chapter  : ', chapter);
      if (chapter.length != 0) res.json(chapter);
      else res.json(null);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ nonovelfound: 'No novel found with that ID' });
      }
    });
};
exports.showNextChapter = (req, res, next) => {
  Chapter.find({
    novelId: req.params.novelId,
    no: req.params.chapterId,
  })
    .then((chapter) => {
      //console.log('chapter  : ', chapter);
      if (chapter.length != 0) res.json(chapter);
      else res.json(null);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ nonovelfound: 'No novel found with that ID' });
      }
    });
};

exports.editChapter = async (req, res, next) => {
  let updatedChapter = {
    no: req.body.no,
    title: req.body.title,
    novelId: req.params.novelId,
    content: req.body.content,
  };
  let chapter = await Chapter.findOneAndUpdate(
    { novelId: req.params.novelId, _id: req.params.chapterId },
    updatedChapter,
    { new: true }
  );
  res.json(chapter);
};

exports.addChapter = async (req, res, next) => {
  //const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  /*if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }*/

  //GET OLD NOVEL
  let oldNovel;
  //console.log('novel id: ', req.params.novelId);
  await Novel.findById(req.params.novelId).then((novel) => (oldNovel = novel));
  //console.log('oldnovel ', oldNovel);

  //CREATE NEW CHAPTER
  let newChapter;
  if (oldNovel.lastChapter) {
    newChapter = new Chapter({
      no: req.body.no,
      title: req.body.title,
      novelId: req.params.novelId,
      content: req.body.content,
      prevChapter: oldNovel?.lastChapter,
    });
  } else {
    newChapter = new Chapter({
      no: req.body.no,
      title: req.body.title,
      novelId: req.params.novelId,
      content: req.body.content,
    });
  }
  newChapter
    .save()
    .then((chapter) => res.json(chapter))
    .catch((err) => {
      console.log(err);
    });
  //console.log(newChapter.id);

  const chapter = newChapter.id;

  //POINT PREV CHAPTER TO THIS NEW CHAPTER
  let prevChapter = await Chapter.findByIdAndUpdate(
    oldNovel.lastChapter,
    { nextChapter: newChapter.id },
    { new: true }
  )
    .then
    //(chapter) => console.log('chapter: ', chapter)
    ();

  Novel.findByIdAndUpdate(
    req.params.novelId,
    { $push: { Chapters: chapter } },
    { safe: true, upsert: true, useFindAndModify: false }
  )
    .then((novel) => {
      //console.log('113 novel', novel);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ nonovelfound: 'No novel found with that ID' });
      }
    });

  let novel = await Novel.findByIdAndUpdate(
    req.params.novelId,
    { lastChapter: chapter },
    { new: true }
  );
  // res.json({
  //   newnovel: novel,
  //   newchapter: newChapter,
  //   prevchapter: prevChapter,
  // });
};

/*

  Novel.findByIdAndUpdate(
    req.params.novelId,
    { $push: { Chapters: chapter } },
    { safe: true, upsert: true },
    function (err, model) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      console.log(model);
      try {
        const newChapter = new Chapter({
          no: req.body.no,
          title: req.body.title,
          novelId: req.params.novelId,
          content: req.body.content,
        });
        novel.save().then((novel) => console.log(novel));
        newChapter.save().then((chapter) => res.json(chapter));
      } catch (err) {
        if (err.kind === 'ObjectId') {
          res.status(404).json({ nonovelfound: 'No novel found with that ID' });
        }
      }
    }
  );*/
