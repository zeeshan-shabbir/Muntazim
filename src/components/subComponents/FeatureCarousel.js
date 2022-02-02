
import { Carousel, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined, LikeOutlined, HomeOutlined, SmileOutlined } from "@ant-design/icons";

  const Data = [
    {
        title: "Recommendation System",
        dis: <p>
            We use a customized application <br /> specifically designed a testing gnose <br /> to keep away for people. </p>,
        iconName: <HomeOutlined />,
    },
    {
        title: " card title 2",
        dis: <p>
            We use a customized application <br /> specifically designed a testing gnose <br /> to keep away for people. </p>,
        iconName: <SmileOutlined />,
    },
    {
        title: " card title 3",
        dis: <p>
            We use a customized application <br /> specifically designed a testing gnose <br /> to keep away for people. </p>,
        iconName: <HomeOutlined />,
    },
    {
        title: " card title 4",
        dis: <p>
            We use a customized application <br /> specifically designed a testing gnose <br /> to keep away for people. </p>,
        iconName: <HomeOutlined />,
    },
]
const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    centerPadding: '0',
    centerMode: true,
    prevArrow: <LeftOutlined />,
    nextArrow: <RightOutlined />,
};
export const FeatureCarousel = ({styles}) => {
  return (
    <Carousel {...settings} arrows>
    {
        Data.map((item, index) => {
            return (
                <div className={styles.card} key={index}>
                    <i className={styles.icon}>
                        {
                            item.iconName
                        }
                    </i>
                    <h3 className={styles.title}>
                        {item.title}
                    </h3>
                    <p className={styles.dis}>{item.dis}</p>
                    <div className={styles.line}>
                    </div>
                </div>
            )
        })
    }
</Carousel>
  );
};
