console.log('load script');

//unregister old serviceWorker if exist
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(
    function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
        location.reload(true);
      }
    });
}

window.addEventListener('load', function () {
  const findLink = (name) => {
    let link = Array.from(document.getElementsByClassName('nav-site')[0].childNodes).filter(el => (Array.from(el.childNodes)[0].innerText) == name);
    if (link) {
      return link[0].childNodes[0];
    }
    return null
  }

  let rootLink = document.querySelector('header').childNodes[0];
  let langEl = findLink('Language');
  let hostName = window.location.pathname;
  if (hostName.includes('/ru')) {


    rootLink.href = "/ru";

    if (langEl) {
      if (window.location.pathname == '/ru') {
        langEl.href = '/';
        langEl.innerText = "English";
      } else if (window.location.pathname.includes('/ru')) {
        let path = window.location.pathname.replace('/ru', '');
        langEl.href = path;
        langEl.innerText = "English";
      }

    }


    let sdk3El = findLink('SDK v3');
    if (sdk3El) {
      sdk3El.innerText = 'SDK v3'
      sdk3El.href = "/ru/sdk3";
    }

    let sdk2El = findLink('v2');
    if (sdk2El) {
      sdk2El.innerText = 'v2'
      sdk2El.href = "/ru/sdk2";
    }

    let sdk1El = findLink('v1');
    if (sdk1El) {
      sdk1El.innerText = 'v1'
      sdk1El.href = "/ru/sdk1";
    }

    let docEl = findLink('About');
    if (docEl) {
      docEl.innerText = 'О программе'
      docEl.href = "/docs/ru/about";
    }

    let blogEl = findLink('Blog');
    if (blogEl) {
      blogEl.href = "https://blog.krestianstvo.org";
      blogEl.innerText = 'Журнал'
    }

  } else {
    rootLink.href = "/";
    if (langEl) {
      if (window.location.pathname.includes('/docs')) {
        let path = window.location.pathname.replace('/docs', '/docs/ru');
        langEl.href = path;
        langEl.innerText = "Русский";
      } else {
        langEl.href = "/ru" + window.location.pathname;
        langEl.innerText = "Русский";
      }
    }
  }
})

