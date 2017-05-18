import './book-preview.pcss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

const BookPreview = ({ book, onBookSelected }) => (
  <NavLink to={`/book/${book.id}`}>
    <Card className='md-card'>
      <CardHeader
        title={book.volumeInfo.title}
        subtitle={ book.volumeInfo.authors && <span><i>Author{book.volumeInfo.authors.length > 1? 's': ''}:</i> {book.volumeInfo.authors.join(', ')}</span> }
        avatar={book.volumeInfo.imageLinks &&
          <Avatar src={book.volumeInfo.imageLinks.smallThumbnail} className='thumbnail' style={{
            'borderRadius': '2px',
            'width': '60px',
            'height': 'auto',
          }} />
        }
        titleStyle={{
          fontSize: '18pt',
          paddingBottom: '12px'
        }}
        subtitleStyle={{
          fontSize: '12pt'
        }}
        style={{
          paddingBottom: '0px'
        }}
      />
      {book.volumeInfo.description &&
        <CardText className="md-card-content" style={{paddingTop: '0', textDecoration: 'none'}}>
          {book.volumeInfo.description}
          <Authors book={book} />
        </CardText>
      }
    </Card>
  </NavLink>);

{/* <md-card>
        <md-card-title-group>
          <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
          <md-card-title>{{ title | bcEllipsis:35 }}</md-card-title>
          <md-card-subtitle *ngIf="subtitle">{{ subtitle | bcEllipsis:40 }}</md-card-subtitle>
        </md-card-title-group>
        <md-card-content>
          <p *ngIf="description">{{ description | bcEllipsis }}</p>
        </md-card-content>
        <md-card-footer>
          <bc-book-authors [book]="book"></bc-book-authors>
        </md-card-footer>
      </md-card>
    </a>
  <div key={todo.id} onClick={() => onTodoSelected(todo)} >
    <span className={`label label-${todo.status === 'active' ? 'info' : todo.status === 'completed' ? 'success' : 'danger'} pull-right`}>
      {todo.status === 'active' ? '' : todo.status === 'completed' ? 'Completed' : 'Canceled'}
    </span>
    <span className="todo-text">{todo.text}</span>
    {todo.status === 'active' &&     // show only when todo is active
      <button title="Task Canceled" className="btn btn-sm btn-danger pull-right"
        onClick={(e) => {e.stopPropagation(); onCanceled(todo.id);}}>
        <span className="glyphicon glyphicon-remove"></span>
      </button>
    }
    {todo.status === 'active' &&     // show only when todo is active
      <button title="Task Completed" className="btn btn-sm btn-success pull-right" onClick={(e) => {e.stopPropagation(); onCompleted(todo.id);}}>
        <span className="glyphicon glyphicon-ok"></span>
      </button>
    }
</div>*/}

export default BookPreview;