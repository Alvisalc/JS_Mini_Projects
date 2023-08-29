// Your Unsplash access key.
const accessKey = "Register your accessKey from Unsplash";

// Get references to HTML elements
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

// Variable to store search-related data
let keyword = "";
let page = 1;

// Function to fetch and display images based on the search keyword
async function searchImages(){

    // Get the search keyword from the input box
    keyword = searchBox.value;

    // URL for the Unsplash API
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    // Fetch data from the Unsplash API
    const response = await fetch(url);
    const data = await response.json();
    
    // Clear the search results if it is the first page
    if(page === 1){
        searchResult.innerHTML = "";
    }

    // Get the list of image results from the API response
    const results = data.results;
    
    // Iterate through the results and create image elements with links
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        // Create a link to the Unsplash page for the image
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        // Append the image to the link and the link to the search result container
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    // Display the "Show More" button after search
    showMoreBtn.style.display = "block";
}

// Submit event listener to the search form
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    // Reset page number when a new search is initiated
    page = 1;
    // Call searchimages function
    searchImages();
})

// Click event listener to "Show more" button
showMoreBtn.addEventListener("click", ()=>{
    // Increment the page number to fetch the next page of results
    page++;
    // Call searchimages function
    searchImages();
})