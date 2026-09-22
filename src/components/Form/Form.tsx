'use client';
import { Button, Container, FormControlLabel, Checkbox, FormHelperText, FormControl, FormLabel } from '@mui/material';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import {
  StyledButtonWrapper,
  StyledFormWrapper,
  StyledH1,
  StyledSection,
} from './Styled';
import { DateInput } from '../Input/DateInput';
import { InputComponent } from '../Input/Input';
import { PhoneInputComponent } from '../Input/PhoneInput';
import emailjs from '@emailjs/browser';
import { schemaContact, type FormSchema } from './Schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const Form = () => {
  const { isMobile } = useResponsive();
  const methods = useForm<FormSchema>({
    resolver: yupResolver(schemaContact),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: new Date(),
      ceremonyLocation: '',
      notice: '',
      preferredContact: ['email'],
    },
  });

  const { control, handleSubmit, reset, watch, setError, clearErrors, formState: { errors } } = methods;

  const onSubmit = (data: any) => {
    const selectedContacts = data.preferredContact || [];

    if (selectedContacts.length === 0) {
      setError('preferredContact' as any, {
        type: 'manual',
        message: 'Please select at least one contact method',
      });
      return;
    }

    if (selectedContacts.includes('whatsapp') && (!data.phone || !data.phone.trim())) {
      setError('phone' as any, {
        type: 'manual',
        message: 'Phone is required for WhatsApp',
      });
      return;
    }

    clearErrors(['preferredContact' as any, 'phone' as any]);

    emailjs
      .send(
        'service_vec1lic',
        'template_9mg856l',
        {
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          preferredContact: selectedContacts.join(', '),
          date: data.date
            ? new Date(data.date).toLocaleDateString('en-GB')
            : '',
          ceremonyLocation: data.ceremonyLocation,
          notice: data.notice,
        },
        'lP2sd_HVK-hsVAY2w'
      )
      .then(
        () => {
          alert('Thank you! Your message has been sent successfully.');
          reset();
        },
        (error) => {
          alert(`Email failed: ${error.text || 'Error'}`);
        }
      );
  };

  return (
    <section id='form'>
      <FormProvider {...methods}>
        <StyledSection isMobile={isMobile}>
          <Container>
            <StyledH1 variant='h2'>Wedding Day Details</StyledH1>
            <StyledFormWrapper>
              <InputComponent id='name' />
              <InputComponent id='email' />

              <FormControl component="fieldset" style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                <FormLabel component="legend" style={{ color: '#333', marginBottom: '5px' }}>
                  Preferred contact method:
                </FormLabel>
                <Controller
                  name="preferredContact"
                  control={control}
                  render={({ field }) => {
                    const currentValues = (field.value as string[]) || [];
                    const handleCheck = (val: string) => {
                      if (currentValues.includes(val)) {
                        field.onChange(currentValues.filter((v) => v !== val));
                      } else {
                        field.onChange([...currentValues, val]);
                      }
                    };

                    return (
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={currentValues.includes('email')}
                              onChange={() => handleCheck('email')}
                            />
                          }
                          label="Email"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={currentValues.includes('whatsapp')}
                              onChange={() => handleCheck('whatsapp')}
                            />
                          }
                          label="WhatsApp / Phone"
                        />
                      </div>
                    );
                  }}
                />
                {(errors as any).preferredContact && (
                  <FormHelperText error>{(errors as any).preferredContact.message}</FormHelperText>
                )}
              </FormControl>

              <PhoneInputComponent />
              <DateInput name='date' control={control} />
              <InputComponent id='ceremonyLocation' />
              <InputComponent id='notice' />
            </StyledFormWrapper>
            <StyledButtonWrapper>
              <Button variant='outlined' onClick={handleSubmit(onSubmit)}>
                send
              </Button>
            </StyledButtonWrapper>
          </Container>
        </StyledSection>
      </FormProvider>
    </section>
  );
};
