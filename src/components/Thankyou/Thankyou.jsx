import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Thankyou() {
    const history = useHistory();
    const feelingReducer = useSelector(store => store.feelingReducer);
    const understandingReducer = useSelector(store => store.understandingReducer);
    const supportReducer = useSelector(store => store.supportReducer);
    const commentsReducer = useSelector(store => store.commentsReducer);

    const startAgain = () => {
        history.push('/');
    }
    // really all this page does is send you back to the beginning for another chance to send feedback
    
    return (
        <section>
            <h2>Thank you for taking the survey!!</h2>
            <button type="submit" onClick={startAgain}>
                DO IT AGAIN
            </button>
        </section>
    )
}

export default Thankyou;