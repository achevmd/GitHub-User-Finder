class GitHub {
  constructor() {
    this.client_id = 'cb8e420f0ca261445394';
    this.client_secret = '097ddb829f5212d2dc99b95d7d1082c662df7e89';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}