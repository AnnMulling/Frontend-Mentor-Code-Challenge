import '../../Styles/Components/Summary.css'


export const ContinueButton = ({ rotateData }) => {


    return (
        <button
        className="continue-btn"
        onClick={rotateData}
        >Continue</button>
    )
};
