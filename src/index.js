import dva from 'dva';
import './index.css';

// 1. Initialize
/*  const app = dva({
       initialState: {
        products: [
           { name: 'dva', id: 1 },
           { name: 'antd', id: 2 },
         ],
       },
     }); */
     const app = dva();
// 2. Plugins
// app.use({});

// 3. Model
/*  app.model(require('./models/products').default);
 */

/* 减法demo */
     app.model(require('./models/num').default);
// 4. Router
//app.router(require('./router').default);

/* 减法demo */
     app.router(require('./router').default)

// 5. Start
app.start('#root');
