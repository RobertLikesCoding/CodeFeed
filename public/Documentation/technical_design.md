## Technical Design

### 1. System Architecture

- Frontend: React with Redux for state management
- API: Reddit API for fetching posts

### 2. Component Structure

- App (main component)
  - Header
    - Logo
    - SearchBar (search for keywords)

  - SideNav
    (Topics section with 4 main navigation links)
    - SubredditLists (list of subreddits)
      - SubredditLink

  - Outlet (React-Router component: rendering page components)
    - MainPage
      - PostList (list of posts)
        - PostItem (individual post)
          - UserData (Name, and time since post)
      - InfoBox (holds information about current page)

    - SearchPage and SubredditPage will be similar to MainPage but need a seperate component structure

    - PostDetailsPage
      - Post details section
      - CommentsList
        - Comment
          - UserData (Name, and time since post)
      - InfoBox

    - NotFoundPage
      (handling routing or fetch errors)



### 3. Data Flow

- Redux Store for global state
- Actions for API calls and state updates
- Reducers for state manipulation
- Routes for Main Page and Article Page

### 4. API Integration

- Use of Reddit API to fetch relevant subreddits
- Error handling for API requests

### 5. Responsive Design

- Use of Grid, Flexbox and media queries
- Use of ``useMediaQuery`` hook from react-responsive library
- Mobile-first approach

### 6. Performance Optimization

- Lazy loading for images and components

### 7. Testing Strategy

- Jest for unit tests and integration tests
- React Testing Library for component tests

### 8. Redux Store Documentation

### 9. Deployment

- CI/CD pipeline with GitHub Actions
- Hosting on Netlify

