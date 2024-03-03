import SignUpComponent from '@/components/SignUpComponent';
import signUpAction from '@/app/actions/signUpAction';

export default function SignUp() {
  return (
    <SignUpComponent signUpAction={signUpAction}/>
  );
}