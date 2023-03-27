class PullBaseWebSite {
  constructor(private url: string) {
    
  }

  getUrl(): string {
    return this.url;
  }
}

class PullBaseUser {
  constructor(private username: string) {

  }

  getUsername(): string {
    return this.username;
  }
}

class PullBaseBlogPost {
  constructor(private author: PullBaseUser, private id: string) {
  
  }

  getId(): string {
    return this.id;
  }

  getAuthor(): PullBaseUser {
    return this.author;
  }
}

function generatePostLink(website: PullBaseWebSite, post: PullBaseBlogPost) {
    let url = website.getUrl();
    let user = post.getAuthor();
    let name = user.getUsername();
    let postId = post.getId();

    return url + name + postId;
  }