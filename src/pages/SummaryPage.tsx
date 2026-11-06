import { useTranslation } from "react-i18next";
import { Container, Stack, Typography } from "@mui/material";

function SummaryPage() {
    const { t } = useTranslation();
    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
            <Stack spacing={3}>
                <Typography variant="h6" component="h2">{t("summary")}</Typography>
            </Stack>
        </Container>
    )
}

export default SummaryPage
