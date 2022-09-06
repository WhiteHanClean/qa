import React, { useEffect, useState } from "react";
import Content from "./components/content/Content";
import Header from "./components/Header/Header";
import Context from "./context";
import "./styles/App.css";
import axios from "axios";

const App = () => {
  const [cards, setCard] = useState([
    {
      title: "Мое первое событие",
      description: "Вот решил потестить мое веб-приложение",
      date: 1,
      mood: "😊",
      img: "",
    },
    {
      title: "Мое первое событие",
      description: "Вот решил потестить мое веб-приложение",
      date: 10,
      mood: "😊",
      img: "",
    },
    {
      title: "Мое первое событие",
      description: "Вот решил потестить мое веб-приложение",
      date: 2,
      mood: "😊",
      img: "",
    },
    {
      title: "Мое первое событие",
      description: "Вот решил потестить мое веб-приложение",
      date: 3,
      mood: "😊",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIoAigMBIgACEQEDEQH/xAAcAAACAwADAQAAAAAAAAAAAAACAwEEBQAHCAb/xAA7EAABAwIFAgMFBgMJAQAAAAABAAIRAyEEBRIxQVFhBhMiFDKBkfBCcaGxwdEHUvEjJENyc5KzwuEz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQAF/8QAIREAAwEAAgIDAQEBAAAAAAAAAAECEQMSMUEEISITFAX/2gAMAwEAAhEDEQA/AOtnVLtBAPUGPrhQXHyxcEG/3fVlLnxAc1kHe0SlsJFmu5vdUE+Bg+kiZJhREOa65HHa6PWT6ZaQCbcfjsjA1tjVFvtRHU/XK3NM3BT407yO8g/eg1H3Rcdk4NaajQAGjaQZ36JcANgzHAF5+Kw3QHCXyCZ41GbI9IY2IGvaHTZcFJ3lueJLWn1O6fUKW05DgIJ07uMWF9p7LsN05TcWvdUe5weJ0xMme/x6/spFJrGtaXhwe02Y6IgwJ+UoSyXEFp6uPbuoY3TvPqHRdh2nPZ6hktBILJmItAKF86zrvxbb6sngaCW+kR2n79kNi0S8Cdzey7DtE6XNZt/mslmXczHWITKjjGmxb1FkuLT8O6FhIHnlciVKkIcNIDZm4sJUQUUKYW4ZpZe0QCNTTPwPdCGk3JngDf65RNOsQ822lxt9botJ0xIgHob2Hw/qmYLFkOc7bjhOewNPoqBwibTdTrDn6i3SCALHkCP0UUyG1GkgAi4tZFgLZL26m6gRvJAtKF1MsMCI5gJuh0+sOBPUW+9FBvptboi66D2wrtBdAJBMxBG6ljCazWtgN37bTwrD2OqHUXaibkdrX+uiKmy2onbYld1O7lQwCGDrJ79AnVTYQGkFomG95+j2HRRBlzi/SNpG3dDrGo7QBtH/AKszAt0WA4uhsXIlCWtnrO5BCNzfTItAjbdARa+2yFmoU4bgEkIYTOSFEIcC0DT2XA3smhqINkrup3YUGqdJ7fNPDFOhb1B7kRqa2KgIIkjaLxCgQDqMTeQQgMBwAuBtdG54J1EyZ6brkaxkhzSDuTzuibBadUiwgg/NLu4gkfHqneXEyI53numIWxjGN02loMemfqU+nIkWJBgdJ2SqR9OlxiNnTcJtOmdMhswY2+uiOUKpkFoIEtiOhv8AV1NVrRBY33SZk88WTmCW7dwUb2a4ABgG0nlM6/QvvjM5gLfftuGwYPzSCIAGqbALQdhZkOa6CZMbqtUw5ZMtteOEpyx02mV3tIMG4HCAggQDZ3A4Ty2NxbrCDTI7IGg1QgiHA6Ra8G6Hck9U8sEd+FAZtZZ1D7IBoumtFlxrE1tM27rUhdUcY2Uzy0dNifoTUhVUYm8A7d9k7RosQWObY25SmwSQ4C4+SfRaHGJvw4iD32U6KaC1S+QZn+spzWuYAdMxxvK43SYN7Rv1+gnapNySA2TPBKZImmAw6SbKxRAeXFxHpHaN/wCqSAdwfSTxZWqDTMQItc8JsoVTLFKn5r/RJB2G5X1mT+EK+NpNrVyKNF3232n7gm+Csoo4qpUxuMH92wzdTpHvHhvzX2DauIxDXPp0hDneXSH8sbx0gLb5Ov0hMR/T7fgzsL4Ay+pTl2IeSeRTsfxWXnf8ParKTquCeyswC+ndatN2Ofjmhr6x0W0tcdpv+S+ywlN7MOHF0vg6weUiuW5fnSiOCLWJYedswy2thXllRrhB5WcWRwu7vH/h+nicJ7bQZpqbvAC6ixeG0VIKasueyFdqiulGc2mIPfquCmrgpkkaiTxJReRNwLBb00L+hTFK+ycyj1IFuVZbSTBS6BEoBfIIp00/yj0PyVhmHNpBHN+ib5B6BMUi3R8UJ1fqrFE7DdpJt3SWHhXaLA4FzhfcEmJ/defKPTpjsNT1vBAPFyFb9jPn+Wyzh756KKBIqNe5xc51ySZ+tlaq1C6XlhtYERKciZvQGUTQ1tJBgAbLSw9BtCn5ztL2vaPc3HRUH4jCDDXa59c2brcQI5umUX1Bg6btbtGrbjbqnSLrwdt+C8NRd4Tra36Wuqep/SAITsrovwj9NMuOnUWl4gDpHWf1WZ/DTMqVbD1ssrFvr/tKYPJ5H5fivszgQ6u15f6ALtjdScr620x/x5VcUtejJGHx/nPxVTC0XVGHT5fJB3d05NkzB1Knt3lPqNNTV6otA3iFvhZVbK6QruxAc4an6iBYlLV75KHxteBmfMBybFajMU5krpDMqAdWcYvK7a8Y40YbLywOPm1wAGnhouf0C6xrt1VFd8Ofw2zyfn8i/us9IxBQg7JzaFtloeR2R06EmIVXVEy5NM1mHM7KyzDdloswqtUsIXWAQvEGm34MtmG7J3s46LYdhWyA0Cw3HKkYMdR8kPYY5xnURIMRFrb3T6I0uGoHa37qtqBmQBIAkDZMp1CxzSDcbkrz0z1aWmj5mlgbtzdF5ziBDyY69VSq4h9Qguj0NAMCIAU0qm7TumdhLjEPIlsuFgd+ite2f3dlFgGkGSdySqZOoQeFwbgI0wGtPoskzKrhK7KlF5Y9jg4O5BXbmQeM8FjqLGY9ww2IiJPuO7zx9xXRVB7mla2ExbmprieVfryTq74K2PB39VzTAUaQrVMZQbSJA8w1Bpv1OwWVjfF2T0m1BhMVSx1VltGHcHgHoXCQPzXVAxTCA+qWtAj1OP5pmApU6eOxLmgB7y140mxDp+d5KR/kSpa/oKv+jdS8nGbObY6tmOLfiK7pLtgNmjoFTZhy7i6sMp3vuVVbn2TMx3sTsfS8/VpgSRqmInaeyudTCzweZHHyclN5pYGF4hGzCwZhaoo22RNo9kDsfPGUaeHnhWaeHgWCtso9k9tKAluh8wUmUOyPyR0V0Up4U+V2QdhvQ8+Rp2F+91xpMyR+iZItNxvCX1KlPQTJ1S7UNwJ2A/BFTMEJU3RNK5HMv0iCU4Nj4qnQcZWhS9QCfH2S8n5ZNNpV2iNkmm1W6LYKolEnIxOaZXWzPCtp0ajWuYdQa7Zx+/7uyzs1yPE4HCYB1XHtabsGsuDaTpmAQCevyVvHZ7iMuzMUKVOlWpwJbfVfieqR4zxeJ9tbhKtRvkBoqNptERP8x5NipueuNpv2VfGnmTmXnXyZWDxGPr46pGYupV6rCw1K1fTqBtGo/D819p4P8CYvB5jTx+b+W3yDNGix2qXcOJ2t0XXbDFUXMtIPxC728JZzTz/KaeIBb7QyGV6Y+y/9juFPwdaf6Kfkupn8+GajKaY2n2VhlK2yY2n2VbohmBTKNpRtpqyymY2TG0o4QOhqkrtpWXPKV1tKQp8pD2GKTzACoIuihcSx4EI2hSAiaFxzYdKxV/DlU6bbq5QFwnQT8n2jRot1K7Sp9BJVbCt2Wnh2Sq5PPvyZmG8M0a+JZisZVqPqlwfUaD6S7eOsI/FWV16XtWPw9Gg7DPwRp1y6zmEGQ4fGPq6t5tn+GyZzaRpmviCNXltdAA6k8LDzrMc7zvKapbQpNy5kPqOouB590mbkGLQOFJyvjScryW8K5qpXXg+UDfXqXb/8IcsNHKcVmTpnF1AxvTTTkT83O+S6h2K9B/w+dQq+EMpOHc1zRhmh2nh/2h/ulScC/WlvyN6Yb7GJjKd05jE1rFQ6JVItjITQyUQYjAhA2GkAGdEWhEFKzQ0jyqAUQClSFp2nA1G1qnlMajSBbDpt7K5Rp3CQzhXcPunQia2aGDpiBZbGHobWWdg1t4X3Qn+iRrWZ3iLIK2d4ahSoV20SyrqcHAw4bccjhaeXZLh8lyilg8OXPL8TSL3vuXu1tkxxYbdlo4fcJ9T/AO2C/wBY/wDG9IqV232URdNKfR1z498Iuyyq/M8vpzgKhmoxv+A4/wDU/httCx/CvivMvC+L14J3mYZ5Bq4aofS/uP5Xdx8ZXdtZjKuDqsqNa9jmODmuEgiOV54couWVFaj0OG3c5R6U8KeJcs8TYLzsuq/2jAPOw9SBUpHuOljB2K3wIXmrwFWq0PGWSmhVfT14lrH6HEamkGWmNxbZeliumnR1QpZICmFwbKVrMwiFxSoXG4f/2Q==",
    },
  ]);

  return (
    <Context.Provider value={cards}>
      <Header />
      <Content />
    </Context.Provider>
  );
};

export default App;
