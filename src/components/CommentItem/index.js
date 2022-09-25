// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, like, onDelete} = props
  const {name, comment, id, isLiked, initialBg} = commentDetails
  const initials = name.trim().slice(0, 1)
  const time = formatDistanceToNow(new Date())
  const onLike = () => {
    like(id)
  }
  const deleteComment = () => {
    onDelete(id)
  }
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedPara = isLiked ? 'liked' : 'like'

  return (
    <li>
      <div className="details-container">
        <p className={`initials ${initialBg}`}>{initials}</p>
        <p className="name">{name}</p>
        <p className="time">{time}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="like-delete-container">
        <div className="like-container">
          <button type="button" className="like-button" onClick={onLike}>
            <img src={likeImage} alt="like" />
          </button>
          <p className={likedPara}>Like</p>
        </div>
        <button
          type="button"
          className="delete"
          onClick={deleteComment}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
