import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {count: 0, commentList: [], name: '', comment: ''}

  nameEntered = event => {
    this.setState({name: event.target.value})
  }

  commentEntered = event => {
    this.setState({comment: event.target.value})
  }

  like = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(eachItem => eachItem.id !== id),
      count: prevState.count - 1,
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBgIndex = Math.floor(Math.random() * 7)
    if (name.trim() !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        initialBg: initialContainerBackgroundClassNames[initialBgIndex],
        isLiked: false,
      }

      this.setState(prevState => ({
        commentList: [...prevState.commentList, newComment],
        name: '',
        comment: '',
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {count, commentList, name, comment} = this.state

    return (
      <div className="bg">
        <h1 className="heading">Comments</h1>
        <div className="container">
          <div className="comment-image-container">
            <img
              className="image"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            />
          </div>
          <form className="form-container">
            <p className="form-para">Say Something about 4.0 Technologies</p>
            <input
              value={name}
              className="form-input"
              type="text"
              placeholder="Your Name"
              onChange={this.nameEntered}
            />
            <textarea
              value={comment}
              rows="10"
              placeholder="Your Comment"
              className="form-textarea"
              onChange={this.commentEntered}
            />
            <button
              className="form-button"
              type="submit"
              onClick={this.addComment}
            >
              Add Comment
            </button>
          </form>
        </div>
        <hr className="line" />
        <p className="form-para">
          <span className="span-el">{count}</span> Comments
        </p>
        {commentList.length === 0 ? null : (
          <ul className="list-container">
            {commentList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                commentDetails={eachItem}
                like={this.like}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Comments
