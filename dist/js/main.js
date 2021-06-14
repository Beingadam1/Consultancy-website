// On scroll
window.addEventListener('scroll', function() {
  let nav = document.querySelector('nav');
  let windowPosition =  window.scrollY > 10;

  nav.classList.toggle('active', windowPosition);
});

// Scroll spy
// spy
// Cache selectors
var lastId,
    topMenu = document.querySelector("#spy-list"),
    topMenuHeight = topMenu.clientHeight + 15,
    // All list items
    menuItems = Array.from(topMenu.querySelectorAll("a"));
// Anchors corresponding to menu items

var scrollItems = document.querySelectorAll(".spy-section");
var scrollItemsArray = Array.from(scrollItems);
scrollItemsArray.forEach(function (item) {
    if (item.offsetTop < 1) {
        item.style.backgroundColor = '#333';
    }
});

// Bind to scroll
var cur;
var id;
window.addEventListener('scroll', function (e) {
    // Get container scroll position
    // console.log('scrollo');
    var fromTop = this.scrollY + topMenuHeight;
    //    console.log(fromTop);
    // Get id of current scroll item

    scrollItems.forEach(function (el) {
        //    console.log(el.offsetTop);
        if (el.offsetTop < fromTop)
            cur = el;
    });

    id = scrollItemsArray.indexOf(cur);
    if (lastId !== id) {
        // console.log(menuItems[id]);
        lastId = id;
        //    console.log(menuItems[lastId]);
        // Set/remove active class
        menuItems.forEach(function (el) {
            el.classList.remove("active");
        });

        menuItems[lastId].classList.add("active");

        window.dispatchEvent(update_spy);
    }
});

var update_spy = new Event('updated:spy');
window.addEventListener('updated:spy', function (e) {
    // console.log(e);
    console.log('done');
    var active = document.querySelector('.active').getAttribute('href');
    document.querySelectorAll('.spy-section').forEach(function (el) {
        el.style.backgroundColor = '';
    });

    document.querySelector(active).style.backgroundColor = '#333';
});