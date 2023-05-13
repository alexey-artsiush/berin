import styles from "/styles/ProductOptions.module.scss";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {replaceBasket, setBasket} from "../redux/reducers/basketReducer";
import AccordionDetails from "@mui/material/AccordionDetails";
import image from "/public/product/1.jpg";
import Accordion from "@mui/material/Accordion";
import Button from "@/components/Button";
import {useState} from "react";
import {Alert, ToggleButton} from "@mui/material";
import { ToggleButtonGroup } from '@mui/material';
import {setErrorAlert, setSuccessAlert} from "@/redux/reducers/alertReducer";

const ProductOptions = ({name = "T-SHIRT", price = 199}) => {
  const dispatch = useDispatch();
  const alertsActive = useSelector(state => state.alerts.alerts)
  const [size, setSize] = useState('S');

  const item = {name: name, price: price, size: size, quantity: 1, image: image, id: `${name}-${size}`}

  function handleBag(item) {
    let previousBasket = JSON.parse(localStorage.getItem("bag"))

    if (!previousBasket) {
      previousBasket = []
      previousBasket.push(item)
      localStorage.setItem("bag", JSON.stringify(previousBasket))
      dispatch(setBasket(item))
      dispatch(setSuccessAlert(true))
      setTimeout(() => {dispatch(setSuccessAlert(false))}, 5000)

      return
    }

    const existingItem = previousBasket.find(anyItem => anyItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
      localStorage.setItem("bag", JSON.stringify(previousBasket))
      dispatch(replaceBasket(previousBasket))
      dispatch(setSuccessAlert(true))
      setTimeout(() => {dispatch(setSuccessAlert(false))}, 5000)
    } else {
      previousBasket.push(item)
      localStorage.setItem("bag", JSON.stringify(previousBasket))
      dispatch(setBasket(item))
      dispatch(setSuccessAlert(true))
      setTimeout(() => {dispatch(setSuccessAlert(false))}, 5000)
    }
    return previousBasket;
  }

  return (
    <div className={styles.clotheOptions}>
      <div className={styles.clotheOptionsTitle}>
        <div>{name}</div>
        <div>{price} NIS</div>
      </div>
      <div className={styles.clotheOptionsSizes}>
        <ToggleButtonGroup
          value={size}
          exclusive
          size="large"
          onChange={(e) => setSize(e.target.value)}
          aria-label="text alignment"
        >
          <ToggleButton
            sx={{
                border: "none"
            }}
            value="S" aria-label="left aligned">
            S
          </ToggleButton>
          <ToggleButton
            sx={{
            border: "none"
          }} value="M" aria-label="centered">
            M
          </ToggleButton>
          <ToggleButton
            sx={{
              border: "none"
            }}
            value="L" aria-label="right aligned">
            L
          </ToggleButton>
        </ToggleButtonGroup>
        <Button
          className={styles.button} disabled={size ? false : true} text="Add to bag" onClick={() => handleBag(item)} />
      </div>

      <Accordion
        sx={{
          boxShadow: "none"
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={styles.accordionTitle}>
            DESCRIPTION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordionDescription}>Crafted in Italy from black cotton jersey, the relaxed-fit piece from Gucci has a crew neckline and is accentuated by the large double G logo print at the front.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          boxShadow: "none"
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={styles.accordionTitle}>COMPOSITION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordionDescription}>Crafted in Italy from black cotton jersey, the relaxed-fit piece from Gucci has a crew neckline and is accentuated by the large double G logo print at the front.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          boxShadow: "none"
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={styles.accordionTitle}>OPTIONS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} className={styles.accordionDescription}>
              <table>
                <tbody>
                <tr>
                  <td>Height</td>
                  <td className={styles.optionValue}>179</td>
                </tr>
                <tr>
                  <td>Bust</td>
                  <td className={styles.optionValue}>98</td>
                </tr>
                <tr>
                  <td>Waist</td>
                  <td className={styles.optionValue}>98</td>
                </tr>
                </tbody>
              </table>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {alertsActive.successAlertActive ?
        <Alert
          variant="filled"
          severity="success"
          className={styles.alert}
          onClose={() => {dispatch(setSuccessAlert(false))}}
        >
          Added to cart!
        </Alert> : null }

      {alertsActive.errorAlertActive ?
        <Alert
          variant="filled"
          severity="error"
          className={styles.alert}
          onClose={() => {dispatch(setErrorAlert())}}
        >
          Something went wrong
        </Alert> : null }
    </div>)
};

export default ProductOptions;
