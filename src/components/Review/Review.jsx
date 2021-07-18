import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './Review.css';

function Review() {
    const history = useHistory();
    const feelingReducer = useSelector(store => store.feelingReducer);
    const understandingReducer = useSelector(store => store.understandingReducer);
    const supportReducer = useSelector(store => store.supportReducer);
    const commentsReducer = useSelector(store => store.commentsReducer);

    const handleReview = () => {
        const feedback ={
            feeling: feelingReducer,
            understanding: understandingReducer,
            support: supportReducer,
            comments: commentsReducer
        }
        console.log(feedback);

        axios.post('/api/feedback', feedback)
        .then(response => {
            console.log('Post', response);
            history.push('/Thankyou');
        })
        .catch(error => {
            console.log('error', error);
        }) 
    }
    return (
        <section>
            <h2>Review Feedback</h2>
            <table className="">
                <tbody>
                <tr>
                    <th>Feeling:</th>
                    <th>Understanding:</th>
                    <th>Support:</th>
                    <th>Comments:</th>
                </tr>
                <tr>
                    <td>{feelingReducer}</td>
                    <td>{understandingReducer}</td>
                    <td>{supportReducer}</td>
                    <td>{commentsReducer}</td>
                </tr>
                </tbody>
            </table>
            <button type="submit" onClick={handleReview}>
                SUBMIT
            </button>
        </section>
    )
}

export default Review;