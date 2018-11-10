const { bodyParser, cors, methodOverride, express } = require('./config')
const { router } = require('./services/principalRouter');
const app = express();

const port = 49153;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride())
app.use(cors());
app.use(router);
app.listen(port, () => {
    console.log(`Codebreaker Backend service listening on port ${port}`);
})