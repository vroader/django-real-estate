import {Helmet} from "react-helmet"

const Title = ({title, descritpion,keywords}) => {
    return (
        <Helmet>
        <title>{title}</title>
        <meta name="description" content={descritpion} />
        <meta name="keywords" content={keywords} />
        </Helmet>
    )
    }

Title.defaultProps = {
    title: 'Welcome to Real Estate',
    descritpion: 'We sell the best properties in town',
    keywords: 'land, real estate, best value',
};

export default Title;