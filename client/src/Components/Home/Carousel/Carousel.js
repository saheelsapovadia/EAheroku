import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import withRouter from 'react-router-dom/withRouter';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import './Carousel.scss';
import LoadingNovelCard from '../../Loading/LoadingNovelCard';
import { CardDeck, Container } from 'react-bootstrap';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#e1e7f0' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#e1e7f0' }}
      onClick={onClick}
    />
  );
}

class CarouselMain extends Component {
  state = {
    novels: ['', '', '', '', '', ''],
    isLoading: true,
  };

  componentDidMount() {
    axios.get('/api/novels/').then((response) => {
      this.setState({ novels: response.data });
      this.setState({ isLoading: false });
    });
  }

  novelSelectedHandler = (id) => {
    this.props.history.push({ pathname: '/novels/' + id });
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplaySpeed: 4000,
      autoplay: true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 5,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     dots: true,
        //     autoplaySpeed: 4000,
        //     autoplay: true,

        //     nextArrow: <SampleNextArrow />,
        //     prevArrow: <SamplePrevArrow />,
        //   },
        // },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplaySpeed: 4000,
            autoplay: true,

            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            autoplaySpeed: 4000,
            autoplay: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            autoplaySpeed: 4000,
            autoplay: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          },
        },
      ],
    };

    // const novels = this.state.novels.map((novel) => {
    //   return (
    //     <Container>
    //       <Row>
    //         <Novel
    //           title={novel.title}
    //           image={novel.image}
    //           clicked={() => this.novelSelectedHandler(novel._id)}
    //         />
    //       </Row>
    //     </Container>
    //   );
    // });

    var novels;
    if (this.state.isLoading) {
      novels = this.state.novels.map((novel) => {
        return <LoadingNovelCard></LoadingNovelCard>;
      });
    } else {
      novels = this.state.novels.map((novel) => {
        return (
          // <Novel
          //   title={novel.title}
          //   author={novel.author}
          //   image={novel.image}
          //   // className='carousel'
          //   clicked={() => this.novelSelectedHandler(novel._id)}
          // />
          <CardDeck>
            <Card
              // style={{ width: '15rem', margin: '2rem' }}
              onClick={() => this.novelSelectedHandler(novel._id)}
              className="carousel"
            >
              <Card.Img className="carousel-img" src={novel.image} />

              <Card.Body className="carousel-body">{novel.title}</Card.Body>
            </Card>
          </CardDeck>
        );
      });
    }
    return (
      <Container>
        <Slider {...settings}>{novels}</Slider>
      </Container>
    );
  }
}

export default withRouter(CarouselMain);
