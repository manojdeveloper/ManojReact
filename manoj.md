# for css notes
for module wise css you need to make sure file name will be ".module.css/scss".
then import like "import manoj from './StoreCardsList.scss';"....now it will behave exatly like javascript object
now use the classes like "manoj.className". if your class name is like with hyphens "text-content" then apply like manoj["text-content"]


# Hooks
useState = use for state chnage
useEffect = use for handle sideffect
useRef = use for dom element refrence
useId = use for genrate dynamic ID
useContext = use for directly provide data to the child component
use = 
useReduser = its very similar or substitute of the useState hook...its use for complex state management
React.memo = use for save re-rendring of the child component if there is no changes......performance optimization
useMemo = use for caching values(memoized value) .... save re-rendring......performance optimization
useCallback = use for caching function(memoized function)......performance optimization


useParams = 
useNavigate = to navigate to the other route 

useNavigation = navigation state (jaise "loading", "idle", etc.) ko track karta hai. Iska use aap loading indicators, disable buttons, ya UI transitions dikhane ke liye karte ho — jab tak ek naya route load ho raha hota hai.

useLoaderData = Jab aap React Router ke kisi route me loader define karte ho (server ya API se data fetch karne ke liye), to us data ko component ke andar use karne ke liye useLoaderData() hook ka use kiya jata hai. Ye hook aapko route ke loader function se aaya hua data access karne deta hai....without useEffect hook ke