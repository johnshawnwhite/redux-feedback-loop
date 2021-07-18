import axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review() {
    const history = useHistory();
    const feelingReducer = useSelector(store => store.feelingReducer);
    const understandingReducer = useSelector(store => store.understandingReducer);
    const supportReducer = useSelector(store => store.supportReducer);
    const commentReducer = useSelector(store => store.commentReducer);

    const handleReview = () => {
        
    }
    return (
        <section>
            <h2>Review Feedback</h2>
            <table>
                <tr>
                    <th>Feeling:</th>
                    <th>Understanding:</th>
                    <th>Support:</th>
                    <th>Comments:</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </section>
    )

}