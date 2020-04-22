import React from "react";
import { Container } from "reactstrap";
import Gallery from "react-photo-gallery";
// reactstrap components
// import {
//   Card,
//   Container,
//   Row,
//   Col,
//   Carousel,
//   CarouselItem,
//   CarouselIndicators,
//   CarouselCaption
// } from "reactstrap";

// core components

const items = [
    {
        src: require("assets/img/soroush-karimi.jpg"),
        altText: "Somewhere",
        caption: "Somewhere"
    },
    {
        src: require("assets/img/federico-beccari.jpg"),
        altText: "Somewhere else",
        caption: "Somewhere else"
    },
    {
        src: require("assets/img/joshua-stannard.jpg"),
        altText: "Here it is",
        caption: "Here it is"
    }
];

function HomeGallery() {
    var items = [
        {id: 1, image: 'https://cdn.pixabay.com/photo/2015/04/20/14/24/animal-731576_1280.jpg'},
        {id: 2, image: 'https://cdn.pixabay.com/photo/2020/04/09/11/42/dogs-5021085_1280.jpg'},
        {id: 3, image: 'https://cdn.pixabay.com/photo/2019/12/30/05/22/scarlet-4728857_960_720.jpg'},
        {id: 4, image: 'https://cdn.pixabay.com/photo/2020/04/03/15/27/flower-meadow-4999277_1280.jpg'},
        {id: 5, image: 'https://cdn.pixabay.com/photo/2020/04/09/19/19/cartoon-doctor-5022797_960_720.jpg'}
      ];

      const photos = [
        {
          src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
          width: 1,
          height: 1
        },
        {
          src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/PpOHJezOalU/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
          width: 4927,
          height: 1000
        },
        {
          src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
          width: 4,
          height: 3
        }
      ];
      
      // Convert array to JSX items
      items = photos.map(function(item) {
        return <div key={item.id}><img src={item.image} /></div>
      });
    return (
        <>
            <div className="section">
                <Container>
                <h3>Selected by Instadown</h3>
                <Gallery photos={photos} />
                </Container>
                
            </div>
        </>
    );
}

export default HomeGallery;
