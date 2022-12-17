const data = {
  bike: {
    insurancePackage: [
      {
        name: "responsibility",
        type: "table",
        title: "Mức trách nhiệm bảo hiểm",
        data: [
          {
            title: [
              "Mức trách nhiệm bảo hiểm là số tiền tối đa doanh nghiệp bảo hiểm có thể phải trả đối với thiệt hại về thân thể, tính mạng và tải sản của bên thứ ba và hành khách do xe cơ giới gây ra trong mỗi vụ tai nạn xảy ra thuộc phạm vi trách hiệm bảo hiểm.",
              "Cụ thể như sau:",
            ],
            headers: ["STT", "Mức Trách Nhiệm", "Số Tiền (VNĐ)"],
            rows: [
              [
                "Mức trách nhiệm bảo hiểm đối với thiệt hại về người do xe cơ giới gây ra",
                "150 triệu đồng/1 người/1 vụ tai nạn",
              ],
              [
                "Mức trách nhiệm bảo hiểm đối với thiệt hại về tài sản do xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy và các loại xe cơ giới tương tự (kể cả xe cơ giới dùng cho người tàn tật) gây ra",
                "50 triệu đồng/1 vụ tai nạn",
              ],
              [
                "Mức trách nhiệm bảo hiểm dối với thiệt hại về tài sản do xe ô tô, máy kéo, xe máy thi công, xe máy nông nghiệp, lâm nghiệp và các loại xe đặc chủng khác sử dụng vào mục đích an ninh, quốc phòng (kể cả rơ-moóc  và sơ mi rơ-moóc được kéo bởi xe ô tô hoặc máy kéo) gây ra",
                "100 triệu đồng/1 vụ tai nạn",
              ],
            ],
          },
        ],
      },
      {
        name: "uninsurance",
        type: "section",
        title: "Loại trừ bảo hiểm",
        data: [
          {
            type: "list",
            content: [
              "Hành động cố ý gây thiệt hại của chủ xe, lái xe hoặc của người bị thiệt hại. Lái xe gây tai nạn cố ý bỏ chạy không thực hiện trách nhiệm dân sự của chủ xe, lái xe cơ giới.",
              "Lái xe không có Giấy phép lái xe hoặc Giấy phép lái xe không phù hợp đối với loại xe cơ giới bắt buộc phải có Giấy phép lái xe. Trường hợp lái xe bị tước quyền sử dụng Giấy phép lái xe có thời hạn hoặc không thời hạn thì được coi là không có Giấy phép lái xe.",
              "Thiệt hại gây ra hậu quả gián tiếp như: giảm giá trị thương mại, thiệt hại gắn liền với việc sử dụng và khai thác tài sản bị thiệt hại.",
              "Thiệt hại đổi với tài sản bị mất cắp hoặc bị cướp trong tai nạn.",
              "Chiến tranh, khủng bố, động đất.",
              "Thiệt hại đối với tài sản đặc biệt bao gồm: vàng, bạc, đá quý, các loại giấy tờ có giá trị như tiền, đồ cổ, tranh ảnh quý hiếm, thi hài, hài cốt.",
            ],
          },
        ],
      },
    ],
  },
  car: {
    insurancePackage: [
      {
        name: "customer",
        type: "table",
        title: "Mức TNDS với người thứ Ba và hành khách",
        data: [
          {
            title: ["MTN tự nguyện tính bằng đồng Việt Nam"],
            headers: ["STT", "MTN", "Mức I", "Mức II", "Mức III"],
            rows: [
              ["Về người", "30tr/ng/vụ", "30tr/ng/vụ", "50tr/ng/vụ"],
              ["Tài sản", "30tr/vụ", "50tr/vụ", "50tr/vụ"],
            ],
          },
          {
            title: ["MTN tự nguyện tính bằng đô la Mỹ (USD)"],
            headers: ["STT", "MTN", "Mức I", "Mức II", "Mức III"],
            rows: [
              [
                "Về người",
                "1000 USD/ng/vụ",
                "1000 USD/ng/vụ",
                "1000 USD/ng/vụ",
              ],
              ["Tài sản", "1000 USD/vụ", "1000 USD/vụ", "1000 USD/vụ"],
            ],
          },
        ],
      },
      {
        name: "driver",
        type: "table",
        title: "Mức TNDS đối với Lái, phụ và người ngồi trên xe",
        data: [
          {
            title: [
              "Phí bảo hiểm (người/năm) = Tỉ lệ phí x Số tiền bảo hiểm",
              "Thuế VAT = 0%",
            ],
            headers: ["STT", "Số tiền bảo hiểm", "Tỉ lệ phí (%)"],
            rows: [
              ["Dưới 30,000,000 đ/Người/Vụ", "0.1"],
              ["30,000,000 - 50,000,000 đ/Người/Vụ", "0.2"],
              ["50,000,000 - 100,000,000 đ/Người/Vụ", "0.3"],
            ],
          },
        ],
      },
      {
        name: "owner",
        type: "section",
        title: "Mức TNDS của chủ xe với hàng hóa vận chuyển trên xe",
        data: [
          {
            type: "list",
            content: [
              "Mức trách nhiệm bảo hiểm theo yêu cầu của chủ xe nhưng tối đa không vượt quá 40 triệu đồng/tấn và không vượt quá 1,6 tỷ đồng.",
              "Số tấn hàng hóa được bảo hiểm (theo yêu cầu của chủ xe): Tối đa là trọng tải cho phép của xe.",
              "Tỷ lệ phí (chưa bao gồm 10%VAT): 0,55% của Mức trách nhiệm bảo hiểm.",
              "Mức khấu trừ: 0.5% Mức trách nhiệm bảo hiểm và tối thiểu không thấp hơn 1000.000 đồng/vụ.",
            ],
          },
          {
            content: [
              "Công thức tính: MTN bảo hiểm/vụ - MTN bảo hiểm/tấn x Số tấn trọng tải của xe.",
            ],
          },
        ],
      },
      {
        name: "others",
        type: "section",
        title: "TNDS trong một số trường hợp khác",
        data: [
          {
            label: "Xe tập lái",
            content: ["Tính bằng 120% của phí xe cùng chủng loại"],
          },
          {
            label: "Xe Taxi",
            content: ["Tính bằng 170% của phí xe kinh doanh cùng số chỗ ngồi"],
          },
          {
            label: "Xe ô tô chuyên dụng",
            content: [
              "Phí bảo hiểm TNDS của xe cứu thương được tính bằng 120% phí của xe plick up.",
              "Phí bảo hiểm của xe chở tiền được tính bằng 120% phí bảo hiểm của xe dưới 6 chỗ ngồi.",
              "Phí bảo hiểm của các loại xe chuyên dùng khác được tính bằng 120% phí bảo hiểm của xe chở hàng cùng trọng tải.",
            ],
          },
          {
            label: "Đầu kéo rơ moóc",
            content: [
              "Tính bằng 150% của phí xe cùng trọng tải trên 15 tấn, phí bảo hiểm của xe đầu kéo Tơ moóc là phí của cả đầu kéo và rơ móc.",
            ],
          },
          {
            label: "Xe máy chuyên dụng",
            content: [
              "Tính bằng 120% phí bảo hiểm của xe chở hàng dưới 3 tấn.",
            ],
          },
          {
            label: "Xe buýt",
            content: [
              "Tính bằng phí bảo hiểm của xe không kinh doanh vận tải cùng số chỗ ngồi.",
            ],
          },
        ],
      },
    ],
  },
};

const closeNode = `<svg
  width="13"
  height="13"
  viewBox="0 0 13 13"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
    d="M8.40324 6.99375L12.6976 2.70905C13.0892 2.31741 13.0892 1.68244 12.6976 1.2908C12.306 0.899161 11.6711 0.899161 11.2795 1.2908L6.99509 5.58549L2.71069 1.2908C2.31908 0.899161 1.68415 0.899161 1.29254 1.2908C0.900933 1.68244 0.900933 2.31741 1.29254 2.70905L5.58693 6.99375L1.29254 11.2784C1.10348 11.466 0.997131 11.7213 0.997131 11.9876C0.997131 12.2539 1.10348 12.5092 1.29254 12.6967C1.48006 12.8858 1.73533 12.9921 2.00162 12.9921C2.26791 12.9921 2.52317 12.8858 2.71069 12.6967L6.99509 8.40201L11.2795 12.6967C11.467 12.8858 11.7223 12.9921 11.9886 12.9921C12.2548 12.9921 12.5101 12.8858 12.6976 12.6967C12.8867 12.5092 12.993 12.2539 12.993 11.9876C12.993 11.7213 12.8867 11.466 12.6976 11.2784L8.40324 6.99375Z"
    fill="#637381"
  />
  </svg>`;

const CLS = {
  modal: "dg-modal",
  card: "dg-card",
};

(function () {
  // Utils
  let throttleTimer = false;
  function throttle(cb, time = 250) {
    if (throttleTimer) return;

    throttleTimer = true;
    setTimeout(() => {
      cb();
      throttleTimer = false;
    }, time);
  }

  // Sticky header
  const header = document.querySelector("header");
  const headerOffsetHeight = header?.offsetHeight || 60;
  const docBody = document.documentElement || document.body;
  const hasOffset = window.scrollY !== undefined;
  let scrollTop;

  window.addEventListener("scroll", () => {
    throttle(() => {
      scrollTop = hasOffset ? window.scrollY : docBody.scrollTop;
      if (scrollTop >= headerOffsetHeight) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  });

  // Mobile menu
  const nav = document.querySelector(".dg-nav.mobile");
  const menuButton = document.querySelector(".dg-nav.mobile .menu-button");
  const menu = document.querySelector(".dg-nav.mobile .dg-nav__menu");
  const navCurtain = document.querySelector(".dg-nav.mobile .dg-nav__curtain");

  const navMobileHieght = nav.offsetHeight;
  const state = { isOpen: false };

  function showMenu() {
    nav.classList.add("open");
    menu.classList.remove("fade-out");
    menu.classList.add("fade-in");

    const { top = 0, height = 0 } = menu.getBoundingClientRect() || {};
    navCurtain.style.height = `${Math.ceil(top + height + 35)}px`;
  }

  function hideMenu() {
    nav.classList.remove("open");
    menu.classList.remove("fade-in");
    menu.classList.add("fade-out");
  }

  function curtainUp() {
    navCurtain.classList.remove("curtain-down");
    navCurtain.classList.add("curtain-up");
  }

  function curtainDown() {
    navCurtain.classList.remove("curtain-up");
    navCurtain.classList.add("curtain-down");
  }

  function unfocusButton() {
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  function curtainDown() {
    navCurtain.classList.remove("curtain-up");
    navCurtain.classList.add("curtain-down");
  }

  function focusButton() {
    menuButton.classList.add("open");
    menuButton.setAttribute("aria-expanded", "true");
  }

  function handleMenuButtonClick() {
    if (state.isOpen) {
      hideMenu();
      unfocusButton();
      curtainDown();
      state.isOpen = false;
      if (navMobileHieght > 0) {
        document.body.style.overflow = "auto";
      }
      return;
    }

    focusButton();
    curtainUp();
    state.isOpen = true;
    if (navMobileHieght > 0) {
      document.body.style.overflow = "hidden";
    }
  }

  function handleCurtainAnimationEnd() {
    if (state.isOpen) {
      showMenu();
    }
  }

  function handleEvent(e) {
    if (e.type === "click") {
      handleMenuButtonClick();
      return;
    }

    if (e.type === "animationend") {
      handleCurtainAnimationEnd();
    }
  }

  menuButton.addEventListener("click", handleEvent);
  menuButton.addEventListener("touchstart", handleEvent);
  navCurtain.addEventListener("animationend", handleEvent);

  // Scroll to sections
  const links = document.querySelectorAll("a:not([data-redirect])");
  for (let link of links) {
    link.addEventListener("click", handleClickLink);
  }

  function handleClickLink(e) {
    handleMenuButtonClick();
    e.preventDefault();
    const href = this.getAttribute("href");
    let offsetTop = 0;
    if (document.querySelector(href)) {
      offsetTop = document.querySelector(href).offsetTop - headerOffsetHeight;
    }

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  // Floating label
  (function () {
    const inputs = document.querySelectorAll("input,select");
    for (let input of inputs) {
      input.addEventListener("blur", function (e) {
        const { value } = e.target;
        if (value) {
          this.classList.add("has-value");
        } else {
          this.classList.remove("has-value");
        }
      });
    }
  })();

  // Hidden scroll when open modal
  const preventScroll = (isPrevent = true) => {
    if (isPrevent) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "auto";
  };

  const dataForModal = Object.values(data)
    .reduce((acc, item) => {
      const [[key, val]] = Object.entries(item);
      if (key === "insurancePackage") {
        acc.push(...val);
      }
      return acc;
    }, [])
    .filter(Boolean);

  const matchDataByName = (data, name) => {
    return data.find((i) => i.name === name);
  };

  const activator = document.querySelectorAll("[data-modal-control]");
  for (let i = 0; i < activator.length; i++) {
    const act = activator[i];
    act.addEventListener("click", function () {
      const { name } = this.dataset;
      const matched = matchDataByName(dataForModal, name);
      if (isNullable(matched)) return;

      preventScroll();
      const { type, data, title } = matched || {};
      const fn = {
        section: createSection,
        table: createTable,
      };
      const bodyMarkup = typeof fn[type] === "function" ? fn[type](data) : null;
      if (bodyMarkup) {
        createModal(title, bodyMarkup);
      }
    });
  }

  // Create elements
  const isNullable = (val) => typeof val === "undefined" || val === null;
  const createElement = ({ as = "div", cls, content, children, ...attrs }) => {
    const el = document.createElement(as);
    const attrKeys = Object.keys(attrs);
    for (let i = 0; i < attrKeys.length; i++) {
      const key = attrKeys[i];
      el.setAttribute(key, attrs[key]);
    }

    if (!isNullable(cls)) {
      el.classList = cls;
    }

    if (!isNullable(content)) {
      el.innerHTML = content;
    }

    if (!isNullable(children)) {
      if (Array.isArray(children)) {
        children.forEach((child) => {
          el.appendChild(child);
        });
      } else {
        el.appendChild(children);
      }
    }
    return el;
  };

  const closeBtn = createElement({
    as: "span",
    content: closeNode,
    cls: "action",
    "data-modal-close": true,
  });

  const createSection = (data = []) => {
    const itemsMarkup = [];
    for (let i = 0; i < data.length; i++) {
      const itemMarkup = [];
      const { type, content = [], label } = data[i];
      if (!isNullable(type) && "list" === type) {
        const cts = [];
        for (let j = 0; j < content.length; j++) {
          const ct = content[j];
          const li = createElement({ as: "li", content: ct });
          cts.push(li);
        }
        const ol = createElement({ as: "ol", children: cts });
        itemMarkup.push(ol);
      } else if (!isNullable(label)) {
        const cts = [];
        for (let j = 0; j < content.length; j++) {
          const ct = content[j];
          const span = createElement({ as: "span", content: ct });
          cts.push(span);
        }

        const labelMarkup = createElement({
          as: "label",
          cls: "label",
          content: label,
        });
        const span = createElement({ as: "p", children: cts });
        const div = createElement({ children: [labelMarkup, span] });
        itemMarkup.push(div);
      } else {
        const cts = [];
        for (let i = 0; i < content.length; i++) {
          const ct = content[i];
          const span = createElement({ as: "span", content: ct });
          cts.push(span);
        }
        const div = createElement({ children: cts });
        itemMarkup.push(div);
      }

      const item = createElement({
        cls: `${CLS.card}__content-item`,
        children: itemMarkup,
      });
      itemsMarkup.push(item);
    }

    const items = createElement({
      cls: `${CLS.card}__content section`,
      children: itemsMarkup,
    });
    return items;
  };

  const createTable = (data = []) => {
    const items = [];
    for (let i = 0; i < data.length; i++) {
      const { title, headers, rows } = data[i];
      const titles = [];
      for (let j = 0; j < title.length; j++) {
        const t = title[j];
        const p = createElement({ as: "p", content: t });
        titles.push(p);
      }
      const titleMarkup = createElement({
        as: "h3",
        cls: `${CLS.card}__title`,
        title,
        children: titles,
      });

      const headersMarkup = [];
      for (let j = 0; j < headers.length; j++) {
        const header = headers[j];
        const td = createElement({ as: "td", content: header });
        headersMarkup.push(td);
      }
      // const tdHeader = createElement({ as: "td", content: "STT" });
      const trHeader = createElement({
        as: "tr",
        children: [...headersMarkup],
      });
      const tHead = createElement({ as: "thead", children: trHeader });

      const trBodies = [];
      for (let j = 0; j < rows.length; j++) {
        const trBody = [];
        const tdFirst = createElement({ as: "td", content: j + 1 });
        const content = rows[j];
        for (let k = 0; k < content.length; k++) {
          const c = content[k];
          const td = createElement({ as: "td", content: c });
          trBody.push(td);
        }

        const trBodyMarkup = createElement({
          as: "tr",
          children: [tdFirst, ...trBody],
        });
        trBodies.push(trBodyMarkup);
      }

      const trBodiesMarkup = createElement({
        as: "tbody",
        children: trBodies,
      });
      const tableMarkup = createElement({
        as: "table",
        children: [tHead, trBodiesMarkup],
      });
      const cardSection = createElement({
        cls: `${CLS.card}__content p-0`,
        children: tableMarkup,
      });

      const itemMarkup = createElement({
        cls: `${CLS.card}`,
        children: [titleMarkup, cardSection],
      });
      items.push(itemMarkup);
    }
    const itemsMarkup = createElement({
      cls: `${CLS.card}__content section`,
      children: items,
    });
    return itemsMarkup;
  };

  const createModal = (title, bodyMarkup) => {
    const h3 = createElement({
      as: "h3",
      title: title,
      content: title,
    });
    const titleMarkup = createElement({
      cls: `${CLS.card}__title`,
      children: [h3, closeBtn],
    });

    // const content = createElement({
    //   cls: `${CLS.card}__content section`,
    //   // children: bodyMarkup,
    // });

    const wrapContent = createElement({
      cls: `${CLS.modal}__content`,
      children: bodyMarkup,
    });
    const card = createElement({
      cls: CLS.card,
      children: [titleMarkup, wrapContent],
    });
    const modalInner = createElement({
      cls: `${CLS.modal}__inner`,
      children: card,
    });
    const dialog = createElement({ role: "dialog", children: modalInner });
    const modalWrap = createElement({
      cls: `${CLS.modal}__wrap`,
      children: dialog,
    });
    const backdrop = createElement({ cls: "dg-backdrop" });
    handleClickBackdrop(backdrop);
    const modal = createElement({
      id: "modal",
      cls: CLS.modal,
      children: [modalWrap, backdrop],
    });
    document.body.append(modal);
    handleCloseModal(closeBtn);
  };

  // Handle actions
  const getModal = () => document.querySelector("#modal");
  const closeModal = () => {
    preventScroll(false);
    const modal = getModal();
    document.body.removeChild(modal);
  };

  // Close modal by click outside modal.
  const handleClickBackdrop = (node) => {
    if (!isNullable(node)) {
      node.addEventListener("click", () => {
        closeModal();
      });
    }
  };

  // Close modal by click "X" button.
  const handleCloseModal = (node) => {
    if (!isNullable(node)) {
      node.addEventListener("click", () => {
        closeModal();
      });
    }
  };

  // Close modal by key press "Escape" button.
  window.addEventListener("keydown", (e) => {
    if (getModal() && e.key === "Escape") {
      closeModal();
    }
  });
})();

$(document).ready(function () {
  // Carousel
  $(".dg-insurance-package__content")
    .not(".slick-initialized")
    .slick({
      // normal options...
      infinite: true,
      // the magic
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick",
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToShow: 1,
            arrows: false,
            dots: true,
          }, // destroys slick
        },
      ],
    });
  $(".dg-person-list")
    .not(".slick-initialized")
    .slick({
      // normal options...
      infinite: true,
      // the magic
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick",
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToShow: 1,
            arrows: false,
            dots: true,
          }, // destroys slick
        },
      ],
    });
});
