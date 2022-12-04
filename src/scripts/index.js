const data = {
  bike: {
    insurancePackage: [
      {
        name: "responsibility",
        type: "table",
        title:
          "Mức trách nhiệm bảo hiểm là số tiền tối đa doanh nghiệp bảo hiểm có thể phải trả đối với thiệt hại về thân thể, tính mạng và tải sản của bên thứ ba và hành khách do xe cơ giới gây ra trong mỗi vụ tai nạn xảy ra thuộc phạm vi trách hiệm bảo hiểm. Cụ thể như sau:",
        data: [
          {
            title:
              "Mức trách nhiệm bảo hiểm là số tiền tối đa doanh nghiệp bảo hiểm có thể phải trả đối với thiệt hại về thân thể, tính mạng và tải sản của bên thứ ba và hành khách do xe cơ giới gây ra trong mỗi vụ tai nạn xảy ra thuộc phạm vi trách hiệm bảo hiểm. Cụ thể như sau:",
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
            order: true,
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

(function () {
  // window.addEventListener("scroll", function (e) {
  //   console.log("event:", e);
  // });

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
    act.addEventListener("click", function (e) {
      const { name } = this.dataset;
      const matched = matchDataByName(dataForModal, name);
      console.log("matched:", matched);
    });
  }
})();
