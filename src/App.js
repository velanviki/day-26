
import './App.css';
import PriceCard from './Price.js';

function App() {

  let price = [
    {
      plan: "Free",
      symbol: "$",
      price: "0",
      period: "month",
      features : [
        {
          name :"Single User",
          enable : true
        },
        {
          name : "5GB storage",
          enable : true
        },
        {
          name : "Unlimited Public Projects",
          enable : true,
        },
        {
          name : "Community Access",
          enable : true,
        },
        {
          name : "Unlimited Private Projects",
          enable : false,
        },
        {
          name : "Dedicated phone Support",
          enable : false,
        },
        {
          name : "Free Subdomain",
          enable : false,
        },
        {
          name : "Monthly status Reports",
          enable : false,
        }

      ]
    },
    {
      plan: "plus",
      symbol: "$",
      price: "9",
      period: "month",
      features : [
        {
          name :"5 Users",
          enable : true
        },
        {
          name : "5GB storage",
          enable : true
        },
        {
          name : "Unlimited Public Projects",
          enable : true,
        },
        {
          name : "Community",
          enable : true,
        },
        {
          name : "Unlimited Private Projects",
          enable : true,
        },
        {
          name : "Dedicated phone Support",
          enable : true,
        },
        {
          name : "Free Subdomain",
          enable : true,
        },
        {
          name : "Monthly status Reports",
          enable : false,
        }

      ]
    },
    {
      plan: "pro",
      symbol: "$",
      price: "49",
      period: "month",
      features : [
        {
          name :"Unlimited User",
          enable : true
        },
        {
          name : "5GB storage",
          enable : true
        },
        {
          name : "Unlimited Public Projects",
          enable : true,
        },
        {
          name : "Community",
          enable : true,
        },
        {
          name : "Unlimited Private Projects",
          enable : true,
        },
        {
          name : "Dedicated phone Support",
          enable : true,
        },
        {
          name : "Free Subdomain",
          enable : true,
        },
        {
          name : "Monthly status Reports",
          enable : true,
        }

      ]
    }
  ];




  return (
    <section className="pricing py-5">
      <div className="container-fluid">
        <div className="row">
        {
        price.map((obj) =>{
            return <PriceCard data={obj}></PriceCard>
        })
        }
        
          
        
        </div>
      </div>

    </section >


  );
}

export default App;
