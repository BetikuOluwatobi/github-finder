class GitHub {
    constructor() {
        this.client_id = '586ac4fef38bd5902a1b';
        this.client_secret = '36a870f8295ea4d67deadb7f00cf145bd5da67da';
        this.repo_count = 5;
        this.repo_sort = 'created: desc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}