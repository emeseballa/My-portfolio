console.log("hello world" + " " + (1+1));

async function getRepos() {
  try {
    const prodUrl = /https:\/\/emeseballa\.github\.io\//gi
    let obj
    let response
    // reduce load on github api during development
    if (window.location.href.match(prodUrl)) {
      response = await fetch('https://api.github.com/users/emeseballa')
      await response.json().then(data => (obj = data))
    } else {
      response = '{"public_repos": 3}'
      obj = JSON.parse(response)
    }
    const publicRepos = obj.public_repos
  
	console.log(publicRepos);
  } catch (e) {
    console.error(e)
  }
}

getRepos()


