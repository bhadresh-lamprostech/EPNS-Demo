import { api, utils } from "@epnsproject/frontend-sdk-staging";
//  
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const makeRequest = async () => {
    const walletAddress = "0x6Ea2D65538C1eAD906bF5F7EdcfEa03B504297ce";
    const pageNumber = 1;
    const itemsPerPage = 20;
    const { count, results } = await api.fetchNotifications(
      walletAddress,
      itemsPerPage,
      pageNumber
    );
    console.log({ results });

    const parsedResponse = await utils.parseApiResponse(results);
    console.log(parsedResponse);
    setData(...data, parsedResponse);

    // NotificationItem.map(oneNotification => (
    //   <NotificationItem
    //     notificationTitle={oneNotification.title}
    //     notificationBody={oneNotification.message}
    //     cta={oneNotification.cta}
    //     app={oneNotification.app}
    //     icon={oneNotification.icon}
    //     image={oneNotification.image}
    //     url={oneNotification.url}
    //   />
    // ))
  };
  console.log(data);

  return (
    <>
      <div className="App">
        <button onClick={() => makeRequest()}>make make request</button>
      </div>
      <div className="container">
      {data.map(item =>(
            <div className="container-box">
              <ul>
                  
                  <li>title:  {item.title}</li>
                  <li>cta:  {item.cta}</li>
                  <li>message:  {item.message}</li>
                  <li>title:  {item.notification.title}</li>
                  <li>Notification:  {item.notification.body}</li>
                 </ul>
            </div>
            ))}
      </div>
    </>
  );
}

export default App;
