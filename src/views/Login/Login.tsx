import * as React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import FormHelperText from "@mui/joy/FormHelperText";
import IconButton from "@mui/joy/IconButton";
import Alert from "@mui/joy/Alert";
import ReportIcon from "@mui/icons-material/Report";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { schema } from "./Login.schema";
import { useRouter } from "next/navigation";

const VALID_EMAIL = "johndoe@mail.com";
const VALID_PASSWORD = "secret@2023";

type FormValues = yup.InferType<typeof schema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: VALID_EMAIL,
      password: VALID_PASSWORD,
    },
    resolver: yupResolver(schema),
  });

  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    setLoading(true);
    setError(false);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    if (values.email !== VALID_EMAIL || values.password !== VALID_PASSWORD) {
      setError(true);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <Sheet
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Sheet
        sx={{
          width: 400,
          mx: "auto",
          my: 4,
          py: 5,
          px: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Typography level="h4" component="h1">
            <strong>Welcome back 👋</strong>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        {error && (
          <Alert
            sx={{ alignItems: "flex-start" }}
            startDecorator={<ReportIcon color="error" />}
            variant="soft"
            color="warning"
          >
            <Typography level="body-sm">Invalid email or password</Typography>
          </Alert>
        )}
        <FormControl id="email" error={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="johndoe@example.com"
            {...register("email")}
          />
          <FormHelperText>{errors.email?.message}</FormHelperText>
        </FormControl>
        <FormControl id="password" error={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type={visible ? "text" : "password"}
            placeholder="password"
            endDecorator={
              <IconButton
                variant="plain"
                color="neutral"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            }
            {...register("password")}
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>
        <Button loading={loading} type="submit" sx={{ mt: 1 }}>
          Log in
        </Button>
        <Typography
          endDecorator={<Link href="/signup">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </Sheet>
  );
}
