// Get all data as json
export function getPosts(postId) {
  return fetch('http://www.skatechicago.org/wp-json/wp/v2/posts/' + postId + '/')
    .then( response =>
      response.json()
    )
    .catch( error =>
      console.warn(error)
    )
}
// export function getPosts(postId) {
//   return fetch('http://www.skatechicago.org/wp-json/wp/v2/posts/' + postId + '/')
//   .then( response => {
//     return response.json()
//   }).then( json => {
//     return json
//   }).catch( error => {
//     console.warn(error)
//   })
// }

// Function to get content by ID
// funciton getContentById(id){
//
// }

// fetch('http://www.skatechicago.org/wp-json/wp/v2/posts/', {
//   method: 'get'
// }).then( response => {
//   return response.json();
// }).then( json => {
//   // this.setState({
//   //   posts: json
//   // });
//   return json;
// }).catch( err => {
//   console.log('Parsing failed', err);
// });
// this.state.posts.map( post=>
//   console.log(post)
// )
