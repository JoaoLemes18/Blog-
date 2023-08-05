function renderPosts() {
  var posts = [
    {
      id: 1,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nulla quis egestas hendrerit. Ut hendrerit felis at pulvinar pellentesque.",
      comments: [
        {
          id: 1,
          postId: 1,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 2,
          postId: 1,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 3,
          postId: 1,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
      ],
    },
    {
      id: 2,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nulla quis egestas hendrerit. Ut hendrerit felis at pulvinar pellentesque.   ",
      comments: [
        {
          id: 1,
          postId: 2,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 2,
          postId: 2,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 3,
          postId: 2,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
      ],
    },
    {
      id: 3,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nulla quis egestas hendrerit. Ut hendrerit felis at pulvinar pellentesque.   ",
      comments: [
        {
          id: 1,
          postId: 3,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 2,
          postId: 3,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 3,
          postId: 3,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
      ],
    },
    {
      id: 4,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nulla quis egestas hendrerit. Ut hendrerit felis at pulvinar pellentesque.   ",
      comments: [
        {
          id: 1,
          postId: 4,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 2,
          postId: 4,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 3,
          postId: 4,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
      ],
    },
    {
      id: 5,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nulla quis egestas hendrerit. Ut hendrerit felis at pulvinar pellentesque.   ",
      comments: [
        {
          id: 1,
          postId: 5,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 2,
          postId: 5,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 3,
          postId: 5,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
      ],
    },
    {
      id: 6,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis nulla quis egestas hendrerit. Ut hendrerit felis at pulvinar pellentesque.   ",
      comments: [
        {
          id: 1,
          postId: 6,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 2,
          postId: 6,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: 3,
          postId: 6,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
      ],
    },
  ];
  var postListContainer = document.getElementById("postCards");
  if (postListContainer) {
    postListContainer.innerHTML = "";
    posts.map(function (post) {
      var postItem = document.createElement("div");
      postItem.className = "card";
      var postContent = '\n                <img src="'
        .concat(post.imageUrl, '" alt="post" />\n                <h3>')
        .concat(
          post.title,
          '</h3>\n                <div class="textCard">\n                    <p>'
        )
        .concat(
          post.body,
          '</p>\n                </div>\n                <span class="expand" href="postDetails.html">Expand...</span>\n            '
        );
      postItem.innerHTML = postContent;
      var expandSpan = postItem.querySelector(".expand");
      if (expandSpan) {
        expandSpan.addEventListener("click", function () {
          location.href = "./postDetails.html?id=".concat(post.id);
          localStorage.setItem("selectedPost", JSON.stringify(post));
        });
      }
      postListContainer.appendChild(postItem);
    });
  }
}
