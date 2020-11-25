import Vue from 'vue'
import iView from 'iview'
import {
  Button,
  Layout,
  Menu,
  MenuGroup,
  MenuItem,
  Sider,
  Icon,
  RadioGroup,
  Radio,
  Row,
  Col,
  FormItem,
  Input, Message, Modal
} from 'view-design'
import 'view-design/dist/styles/iview.css'
import locale from 'iview/dist/locale/en-US';
Vue.use(locale)
// Vue.component('Button', Button)
// Vue.component('Layout', Layout)
// Vue.component('Sider', Sider)
// Vue.component('Menu', Menu)
// Vue.component('MenuGroup', MenuGroup)
// Vue.component('MenuItem', MenuItem)
// Vue.component('Icon', Icon)
// Vue.component('RadioGroup', RadioGroup)
// Vue.component('Radio', Radio)
// Vue.component('Row', Row)
// Vue.component('Col', Col)
// Vue.component('FormItem', FormItem)

Vue.use(iView)
Vue.use(Button)
Vue.use(Layout)
Vue.use(Sider)
Vue.use(Menu)
Vue.use(MenuGroup)
Vue.use(MenuItem)
Vue.use(Icon)
Vue.use(RadioGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Radio)
Vue.use(FormItem)
Vue.use(Input)
// Vue.use(MessageBox)


// 特殊：需要全局挂载
Vue.prototype.$message = Message;
Vue.prototype.$confirm = Modal.confirm;
// Vue.prototype.$confirm = MessageBox.confirm;