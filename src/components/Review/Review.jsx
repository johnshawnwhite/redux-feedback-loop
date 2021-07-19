import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './Review.css';
// the selector allows for the callback of the reducers, and gives you the ability to use them 
// the post route is where the information gets sent to the db for storage
// the object gets packaged up as a constant of feedback and sent in that manner, with the 4 values.

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

// the table was hard to center, i spent several hours trying things with classnames and css styling
// i eventually figured out all i needed was a <center> tag and it was a very simple fix
    return (
        <section className="table">
            <h2>Review Feedback</h2>
            <center>
            <table>
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
            </center>
            <button type="submit" onClick={handleReview}>
                SUBMIT
            </button>
        </section>
        
    )
}

export default Review;