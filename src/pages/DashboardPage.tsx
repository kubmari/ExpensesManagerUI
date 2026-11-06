import { useTranslation } from "react-i18next";
import { Container, Stack, Typography } from "@mui/material";

function DashboardPage() {
    const { t } = useTranslation();
    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
            <Stack spacing={3}>
                <Typography variant="h6" component="h2">{t("dashboard")}</Typography>
            </Stack>
        </Container>
    )
}

export default DashboardPage
