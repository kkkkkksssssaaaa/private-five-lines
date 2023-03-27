class PushBaseWebsite {
  constructor(private url: string) {

  }

  generateLink(name: string, id: string): string {
    return this.url + name + id;
  }
}

class PushBaseUser {
  constructor(private username: string) {

  }

  generateLink(website: PushBaseWebsite, id: string): string {
    return website.generateLink(this.username, id);
  }
}

class PushBaseBlogPost {
  constructor(private author: PushBaseUser, private id: string) {
    
  }

  generateLink(website: PushBaseWebsite): string {
    return this.author.generateLink(website, this.id);
  }
}

function generatePostLink(website: PushBaseWebsite, post: PushBaseBlogPost) {
  return post.generateLink(website);
}