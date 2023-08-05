interface PostsB {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
  comments: Comments[];
}

interface Comments {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

function renderPosts() {
  let posts: PostsB[] = [
    {
      id: 1,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      comments: [
        {
          id: 1,
          postId: 1,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Este é um ótimo post!",
        },
        {
          id: 2,
          postId: 1,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Obrigado por compartilhar!",
        },
        {
          id: 3,
          postId: 1,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Este é um ótimo post!",
        },
      ],
    },
    {
      id: 2,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      comments: [
        {
          id: 1,
          postId: 2,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Este é um ótimo post!",
        },
        {
          id: 2,
          postId: 2,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Obrigado por compartilhar!",
        },
        {
          id: 3,
          postId: 2,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Este é um ótimo post!",
        },
      ],
    },
    {
      id: 3,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      comments: [
        {
          id: 1,
          postId: 3,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Este é um ótimo post!",
        },
        {
          id: 2,
          postId: 3,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Obrigado por compartilhar!",
        },
        {
          id: 3,
          postId: 3,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Este é um ótimo post!",
        },
      ],
    },
    {
      id: 4,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      comments: [
        {
          id: 1,
          postId: 4,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Este é um ótimo post!",
        },
        {
          id: 2,
          postId: 4,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Obrigado por compartilhar!",
        },
        {
          id: 3,
          postId: 4,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Este é um ótimo post!",
        },
      ],
    },
    {
      id: 5,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      comments: [
        {
          id: 1,
          postId: 5,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Este é um ótimo post!",
        },
        {
          id: 2,
          postId: 5,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Obrigado por compartilhar!",
        },
        {
          id: 3,
          postId: 5,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Este é um ótimo post!",
        },
      ],
    },
    {
      id: 6,
      title: "The Future",
      imageUrl: "assets/imgcard.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      comments: [
        {
          id: 1,
          postId: 6,
          name: "usuário_1",
          email: "usuario1@example.com",
          body: "Este é um ótimo post!",
        },
        {
          id: 2,
          postId: 6,
          name: "usuário_2",
          email: "usuario2@example.com",
          body: "Obrigado por compartilhar!",
        },
        {
          id: 3,
          postId: 6,
          name: "usuário_3",
          email: "usuario3@example.com",
          body: "Este é um ótimo post!",
        },
      ],
    },
  ];

  const postListContainer = document.getElementById("postCards");

  if (postListContainer) {
    postListContainer.innerHTML = "";

    posts.map((post) => {
      const postItem = document.createElement("div");
      postItem.className = "card";

      const postContent = `
                <img src="${post.imageUrl}" alt="post" />
                <h3>${post.title}</h3>
                <div class="textCard">
                    <p>${post.body}</p>
                </div>
                <span class="expand" href="second.html">Expand...</span>
            `;
      postItem.innerHTML = postContent;

      const expandSpan = postItem.querySelector(".expand");
      if (expandSpan) {
        expandSpan.addEventListener("click", () => {
          location.href = `./second.html?id=${post.id}`;
          localStorage.setItem("selectedPost", JSON.stringify(post));
        });
      }

      postListContainer.appendChild(postItem);
    });
  }
}
