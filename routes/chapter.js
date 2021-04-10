const Novel = require('../models/Novel');
const Chapter = require('../models/Chapter');

exports.showChapter = (req, res, next) => {
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
    { novelId: req.params.novelId, no: req.params.chapterId },
    updatedChapter,
    { new: true }
  );
  res.json(chapter);
};

exports.addChapter = (req, res, next) => {
  //const { errors, isValid } = validatePostInput(req.body);

  // Check Validation
  /*if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }*/

  const newChapter = new Chapter({
    no: req.body.no,
    title: req.body.title,
    novelId: req.params.novelId,
    content: req.body.content,
  });
  newChapter.save().then((chapter) => res.json(chapter));
  //console.log(newChapter.id);

  const chapter = newChapter.id;

  Novel.findByIdAndUpdate(
    req.params.novelId,
    { $push: { Chapters: chapter } },
    { safe: true, upsert: true, useFindAndModify: false }
  )
    .then((novel) => {
      //console.log(novel);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).json({ nonovelfound: 'No novel found with that ID' });
      }
    });
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
