
async function fetchPosts() {
  try {
    // Fetch data from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Convert response to JSON
    const data = await response.json();
  
    console.log("Fetched Posts:");
    data.slice(0, 5).forEach(post => {
      console.log(`ID: ${post.id}, Title: ${post.title}`);
    });
    
    const container = document.getElementById('posts');
    data.slice(0, 5).forEach(post => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}


fetchPosts();
