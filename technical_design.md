## Technical Design

### 1. System Architecture

- Frontend: React with Redux for state management
- API: Reddit API for fetching posts

### 2. Component Structure

- App (main component)
  - Navbar
    - Categories
      - Category
    - SearchBar (search for keywords)

  - Sidebar
    - Subreddit Lists (list of subreddits)
      - Subreddits

  - PostList (list of posts)
    - PostItem (individual post)
      - UserData (Name, and time since post)

  - CommentsList
    - Comment
      - UserData (Name, and time since post)

  - InfoBox (information about current Filter or Reddit)

  - OPTIONAL: SavedPosts (saved posts)

### 3. Data Flow

- Redux Store for global state
- Actions for API calls and state updates
- Reducers for state manipulation
- Routes for Main Page and Article Page

### 4. API Integration

- Use of Reddit API to fetch relevant subreddits
- Error handling for API requests

### 5. Responsive Design

- Use of Flexbox and media queries
- Mobile-first approach

### 6. Performance Optimization

- Lazy loading for images and components

### 7. Testing Strategy

- Jest for unit tests
- React Testing Library for component tests
- Selenium for end-to-end tests

### 9. Deployment

- CI/CD pipeline with GitHub Actions
- Hosting on Netlify
