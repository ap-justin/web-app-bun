import {
  AiFillCaretLeft,
  AiFillCheckCircle,
  AiFillHeart,
  AiFillYoutube,
  AiOutlineDislike,
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiOutlineLike,
  AiOutlineMedium,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
  AiOutlineUpload,
} from "react-icons/ai";
import {
  BiArrowBack,
  BiBold,
  BiCheck,
  BiChevronDown,
  BiChevronUp,
  BiGlobe,
  BiItalic,
  BiSave,
  BiSearchAlt2,
  BiSun,
} from "react-icons/bi";
import {
  BsExclamationCircle,
  BsExclamationCircleFill,
  BsFilterLeft,
  BsHourglassSplit,
  BsTwitter,
} from "react-icons/bs";
import { CgArrowsExchangeAltV, CgUndo } from "react-icons/cg";
import {
  FaChurch,
  FaClock,
  FaCog,
  FaDiscord,
  FaDonate,
  FaExclamation,
  FaFacebook,
  FaHospital,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaListOl,
  FaListUl,
  FaMoneyBillWave,
  FaParachuteBox,
  FaStopwatch,
  FaTelegramPlane,
  FaTiktok,
  FaUniversity,
  FaUserCircle,
  FaUsersCog,
} from "react-icons/fa";
import { FcSafe } from "react-icons/fc";
import { FiMenu, FiMoon } from "react-icons/fi";
import { GiPieChart, GiTwoCoins } from "react-icons/gi";
import { GoDash, GoLinkExternal } from "react-icons/go";
import { GrFacebookOption } from "react-icons/gr";
import { ImFilePicture } from "react-icons/im";
import { IoMdDownload, IoMdSettings } from "react-icons/io";
import {
  IoClose,
  IoCloseCircle,
  IoCrop,
  IoWalletSharp,
  IoWarning,
} from "react-icons/io5";
import {
  MdCardGiftcard,
  MdOutlineAdminPanelSettings,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
  MdOutlineContentCopy,
  MdOutlineEmail,
  MdOutlineFileDownload,
  MdOutlineFilterAlt,
  MdOutlineUploadFile,
} from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { SiHiveBlockchain } from "react-icons/si";
import { TiArrowUnsorted } from "react-icons/ti";
import { VscLoading, VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

export const icons = {
  Admin: FaUsersCog,
  AdminPanel: MdOutlineAdminPanelSettings,
  ArrowBack: BiArrowBack,
  ArrowDown: BiChevronDown,
  ArrowUp: BiChevronUp,
  Back: MdOutlineArrowBackIosNew,
  Blockchain: SiHiveBlockchain,
  Bold: BiBold,
  CaretLeft: AiFillCaretLeft,
  Check: BiCheck,
  CheckCircle: AiFillCheckCircle,
  Clock: FaClock,
  Close: IoClose,
  CloseCircle: IoCloseCircle,
  Cog: FaCog,
  Coins: GiTwoCoins,
  Copy: MdOutlineContentCopy,
  Crop: IoCrop,
  Dash: GoDash,
  Discord: FaDiscord,
  Dislike: AiOutlineDislike,
  Down: VscTriangleDown,
  Edit: AiOutlineEdit,
  Email: MdOutlineEmail,
  ExchangeAlt: CgArrowsExchangeAltV,
  Exclamation: FaExclamation,
  ExclamationCircle: BsExclamationCircle,
  ExclamationCircleFill: BsExclamationCircleFill,
  ExternalLink: GoLinkExternal,
  Eye: AiOutlineEye,
  EyeInvisible: AiOutlineEyeInvisible,
  Facebook: GrFacebookOption,
  FacebookCircle: FaFacebook,
  FatArrowDownload: IoMdDownload,
  FileDownload: MdOutlineFileDownload,
  FileUpload: MdOutlineUploadFile,
  Filter: MdOutlineFilterAlt,
  FilterLeft: BsFilterLeft,
  Forward: MdOutlineArrowForwardIos,
  Giftcard: MdCardGiftcard,
  Globe: BiGlobe,
  HeartFill: AiFillHeart,
  HeartOutline: AiOutlineHeart,
  HourglassSplit: BsHourglassSplit,
  Info: AiOutlineInfoCircle,
  Instagram: FaInstagram,
  Italic: BiItalic,
  Like: AiOutlineLike,
  Linkedin: FaLinkedin,
  LinkedinIn: FaLinkedinIn,
  ListOl: FaListOl,
  ListUl: FaListUl,
  Loading: VscLoading,
  MapPin: RiMapPin2Line,
  Medium: AiOutlineMedium,
  Menu: FiMenu,
  MoneyBill: FaMoneyBillWave,
  Moon: FiMoon,
  Parachute: FaParachuteBox,
  Picture: ImFilePicture,
  PieChart: GiPieChart,
  Plus: AiOutlinePlus,
  Question: AiOutlineQuestionCircle,
  Safe: FcSafe,
  Save: BiSave,
  Search: BiSearchAlt2,
  Settings: IoMdSettings,
  StopWatch: FaStopwatch,
  Sun: BiSun,
  Telegram: FaTelegramPlane,
  Tiktok: FaTiktok,
  Twitter: BsTwitter,
  Undo: CgUndo,
  Unsorted: TiArrowUnsorted,
  Up: VscTriangleUp,
  Upload: AiOutlineUpload,
  User: FaUserCircle,
  Wallet: IoWalletSharp,
  Warning: IoWarning,
  Youtube: AiFillYoutube,
  Hospital: FaHospital,
  Charity: FaDonate,
  University: FaUniversity,
  ReligiousOrganization: FaChurch,
} as const;

export type IconType = keyof typeof icons;
