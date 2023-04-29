import styles from "/styles/ProductOptions.module.scss";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import axios from 'axios';
import Accordion from "@mui/material/Accordion";
import Button from "@/components/Button";
import {useState} from "react";
import {ToggleButton} from "@mui/material";
import { ToggleButtonGroup } from '@mui/material';
const ProductOptions = ({name = "T-SHIRT", price = 75}) => {

  const [size, setSize] = useState('');
  const handleChooseSize = (event) => {
    setSize(event.target.value);
  };

  const handleBuy = (size) => {
    axios.post(SERVER_API, {size: size})
  }

  return (
    <div className={styles.clotheOptions}>
      <div className={styles.clotheOptionsTitle}>
        <div>{name}</div>
        <div>{price}$</div>
      </div>
      <div className={styles.clotheOptionsSizes}>
        <ToggleButtonGroup
          value={size}
          exclusive
          size="large"
          onChange={handleChooseSize}
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
          className={styles.button} text="BUY" onClick={() => handleBuy()} />
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
    </div>)
};

export default ProductOptions;
