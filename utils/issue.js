const axios = require('axios')

// gather issues
async function getIssues (user, repository) {
  // Conf
  const config = {
    headers: {
      accept: 'application/json',
      authorization: 'token ' + process.env.GITHUB_TOKEN
    }
  }

  // Getting the last 100 open issues when added
  const url = await axios.get(`https://api.github.com/repos/${user}/${repository}/issues?state=open&per_page=100&page=1`, config)
  return url.data

  /* WORK IN PROGRESS
  const url = await axios.get(`https://api.github.com/repos/${user}/${repository}/issues?state=all&per_page=1&page=1`, config)
  // Max page number that we can take from GitHub API
  const pages = Math.ceil(url.data[0].number / 100)

  for (let i = pages; i > 0; i--) {
    console.log('-----------------------------------')
    const newUrl = await axios.get(`https://api.github.com/repos/${user}/${repository}/issues?state=all&per_page=100&page=${i}`, config)
    console.log(newUrl.data)
  }
  */
}

module.exports = getIssues
