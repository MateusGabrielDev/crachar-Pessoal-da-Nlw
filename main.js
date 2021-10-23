const linksSocialMedia = {
  github: 'MateusGabrielDev',
  instagram: 'mateus_gabriel_venancio',
  facebook: 'profile.php?id=100014368718312'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPicture.src = data.avatar_url
    })
}

getGitHubProfileInfo()
