document.addEventListener('DOMContentLoaded', () => {
    // Select all parent menu items with submenus
    document.querySelectorAll('#sidebar ul > li > a').forEach((menu) => {
      menu.addEventListener('click', () => {
        const subMenu = menu.nextElementSibling;
        if (!subMenu) return;
        const arrowIcon = menu.querySelector('.arrowIcon');

        // Check if the submenu is currently open
        if (subMenu.classList.contains('max-h-0')) {
          subMenu.classList.remove('max-h-0');
          subMenu.classList.add('max-h-[500px]'); // Adjust height as needed
        } else {
          subMenu.classList.remove('max-h-[500px]');
          subMenu.classList.add('max-h-0');
        }

        // Toggle arrow rotation
        arrowIcon.classList.toggle('rotate-0');
        arrowIcon.classList.toggle('-rotate-90');
      });
    });

    let sidebarCloseBtn = document.getElementById('close-sidebar');
    let sidebarOpenBtn = document.getElementById('open-sidebar');
    let sidebarCollapseMenu = document.getElementById('sidebar-collapse-menu');
    let sidebar = document.getElementById('sidebar');

    sidebarOpenBtn.addEventListener('click', () => {
      sidebarCollapseMenu.style.cssText = 'width: 270px; visibility: visible; opacity: 1;';
      sidebar.style.cssText = 'width: 270px;';
    });

    sidebarCloseBtn.addEventListener('click', () => {
      sidebarCollapseMenu.style.cssText = 'width: 32px; visibility: hidden; opacity: 0;';
      sidebar.style.cssText = 'width: 32px;';
    });
  });

  

  //function to reset other links on the menu
  function resetOtherLinksMenu(activeLink) {
    const links = document.querySelectorAll('.menu a');
    links.forEach(link => {
        if (link !== activeLink) {
            link.style.backgroundColor = '';
            link.style.color = '';
        }
    });
  }

  //function to reset other links in the submenu
  function resetOtherLinks(activeLink) {
    const links = document.querySelectorAll('.sub-menu a');
    links.forEach(link => {
        if (link !== activeLink) {
            link.style.backgroundColor = '';
            link.style.color = '';
        }
    });
  }

  //function to display file name in input field
  function displayFileName(input) {
    const file = input.files[0];
    const fileName = document.getElementById('file-name');
    const previewImage = document.getElementById('preview-image');
    const uploadIcon = document.getElementById('upload-icon');

    if (file) {
        fileName.textContent = file.name;
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.classList.remove('hidden');
            uploadIcon.classList.add('hidden');
        };
        reader.readAsDataURL(file);
    } else {
        fileName.textContent = 'Only .png, .jpeg, .jpg are allowed.';
        previewImage.classList.add('hidden');
        uploadIcon.classList.remove('hidden');
    }
  }