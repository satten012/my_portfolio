function showLetter() {
  var popup = document.getElementById("information__aboutDescriptionShowLetterAllText");
  popup.classList.toggle("show");
}

// чарт бары с временем

const ctx = document.getElementById("content__timeInformationEncodingTimeChartPerWeek");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "1 week",
      "2 weeks",
      "3 weeks",
      "4 weeks",
      "5 weeks",
      "6 weeks",
      "7 weeks",
      "8 weeks",
      "9 weeks",
      "10 weeks",
      "11 weeks",
      "12 weeks",
      "13 weeks",
      "14 weeks",
      "15 weeks",
      "16 weeks",
    ],
    datasets: [
      {
        label: "Encoding time",
        yAxisID: "y",
        data: [
          5.31, 12.26, 13.17, 13.25, 15.53, 21.45, 7.2, 16.54, 24.4, 6.2, 13.47,
          22.57, 18.1, 25.37, 26.27, 11.22,
        ],
        type: "bar",
        borderWidth: 2,
        backgroundColor: "#36bffa",
        borderColor: "#ACCDF0",
      },
    ],
  },

  options: {
    scales: {
      x: {
        grid: {
          color: "red",
          display: false,
          drawBorder: false,
        },
        title: {
          display: true,
          text: "Time",
          color: "#ACCDF0",
          font: {
            family: "Comic Sans MS",
            size: 14,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        title: {
          display: true,
          text: "Hours",
          color: "#ACCDF0",
          font: {
            family: "Comic Sans MS",
            size: 14,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Encoding time per week",
        color: "white",
        font: {
          size: 12,
        },
      },
      legend: {
        display: false,
      },
    },
  },
});

const legendMargin = {
  id: "legendMargin",
  beforeInit(chart, legend, option) {
    const fitValue = chart.legend.fit;
    chart.legend.fit = function fit() {
      fitValue.bind(chart.legend)();
      return (this.height = "00");
    };
  },
};

// чарт с проектами

const ctx2 = document.getElementById("content__timeInformationDualGraphDisplayContentPieChart");

new Chart(ctx2, {
  type: "doughnut",

  data: {
    labels: ["HTML/CSS", "JavaScript", "Node.js", "React.js"],
    datasets: [
      {
        label: "projects",
        data: [0, 2, 0, 2],
        backgroundColor: ["#569DD5", "#2E6EB6", "#224AA2", "#118DFF"],
        hoverBorderWidth: 4,
        hoverOffset: 20,
      },
    ],
  },
  options: {
    layout: {
      padding: "6",
    },
    plugins: {
      title: {
        display: true,
        text: "projects completed",
        color: "white",
        font: {
          size: 14,
        },
        
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.85)",

      },
      legend: {
        position: "top",
        align: "start",
        display: false,
        labels: {
          color: "white",
          boxHeight: 5,
        },
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        beginAtZero: false,
        display: false,
      },
    },
  },
  plugins: [legendMargin],

});

// чарт с временем

const ctx3 = document.getElementById("content__timeInformationDualGraphDisplayContentChartSpeedometerChart");

new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "Total encoding time",
        data: [600, 3000],
        borderWidth: 1,
        display: true,
        borderWidth: 0,
        hoverBorderWidth: 3,
        backgroundColor: ["#36bffa", "white"],
      },
    ],
  },
  options: {
    layout: {
      padding: "3",
    },
    plugins: {
      title: {
        display: true,
        text: "Total encoding time",
        color: "white",
        font: {
          size: 14,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        filter: (tooltipItem) => {
          return tooltipItem.dataIndex === 0;
        },
      },
    },
    circumference: 180,
    rotation: 270,
    cutout: "75%",
    scales: {
      y: {
        display: false,
      },
    },
  },
  plugins: [legendMargin],
});

function seconfunctuib() {
  var technology = document.getElementById("technology");
}
/*
const select1s = document.querySelector("#select1s");
const select2s = document.querySelector("#select2s");
const select3s = document.querySelector("#select3s");
const hidden22 = document.querySelector(".hidden22");
const as111fasf = document.querySelector(".as111fasf");
*/
/*
select1s.addEventListener("change", function () {
  if (select1s.value !== "james1") {
    as111fasf.classList.add("hidden22");
  } else {
    as111fasf.classList.remove("hidden22");
  }
});*/



const faCircleArrowRight = document.querySelector(".fa-circle-right")
const faCircleLeft = document.querySelector(".fa-circle-left")
const contentPortfolio2Content = document.querySelector(".content__portfolioProjectsContent")



faCircleArrowRight.addEventListener("click", () =>{
  contentPortfolio2Content.scrollLeft +=150
} )

faCircleLeft.addEventListener("click", () =>{
  contentPortfolio2Content.scrollLeft -=150
} )

