import styles from "/styles/ProductOptions.module.scss";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import Button from "@/components/Button";
import {useState} from "react";
import {ToggleButton} from "@mui/material";

const ProductOptions = ({name = "T-shirt", price = 75}) => {

  const [activeSizeS, setActiveSizeS] = useState(false)
  const [activeSizeM, setActiveSizeM] = useState(false)
  const [activeSizeL, setActiveSizeL] = useState(false)
  const [activeSizeXL, setActiveSizeXL] = useState(false)

  const clickS = () => {
    setActiveSizeS(!activeSizeS)
  }
  const clickM = () => {
    setActiveSizeM(!activeSizeM)
  }
  const clickL = () => {
    setActiveSizeL(!activeSizeL)
  }
  const clickXL = () => {
    setActiveSizeXL(!activeSizeXL)
  }

  return (
    <div className={styles.clotheOptions}>
      <div className={styles.clotheOptionsTitle}>
        <div>{name}</div>
        <div>{price}$</div>
      </div>
      <div className={styles.clotheOptionsSizes}>
        <ToggleButton
          value="S"
          sx={{
            border: 'none',
          }}
          selected={activeSizeS}
          onChange={() => {
            setActiveSizeS(!activeSizeS);
          }}
        >
          S
        </ToggleButton>
        <Button className={styles.sizeButton} text="S" onClick={() => clickS()} />
        <Button className={styles.sizeButton} text="M" onClick={() => clickM()} />
        <Button className={styles.sizeButton} text="L" onClick={() => clickL()} />
        <Button className={styles.sizeButton} text="XL" onClick={() => clickXL()} />

        <Button className={styles.button} text="Buy" />
      </div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={styles.accordionTitle}>
            Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordionDescription}>Crafted in Italy from black cotton jersey, the relaxed-fit piece from Gucci has a crew neckline and is accentuated by the large double G logo print at the front.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={styles.accordionTitle}>Composition and care</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordionDescription}>Crafted in Italy from black cotton jersey, the relaxed-fit piece from Gucci has a crew neckline and is accentuated by the large double G logo print at the front.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={styles.accordionTitle}>Options</Typography>
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
