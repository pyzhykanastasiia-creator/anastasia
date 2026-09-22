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
      preferredContact: ['email'], // По умолчанию выбран Email
    },
  });

  const { control, handleSubmit, reset, watch, setError, clearErrors, formState: { errors } } = methods;

  // Отслеживаем выбранные способы связи
  const preferredContact = watch('preferredContact') || [];

  const onSubmit = (data: any) => {
    // Валидация: должен быть выбран хотя бы один способ связи
    if (!data.preferredContact || data.preferredContact.length === 0) {
      setError('preferredContact' as any, {
        type: 'manual',
        message: 'Please select at least one preferred contact method.',
      });
      return;
    }

    // Валидация: если выбран WhatsApp, телефон обязателен
    const isWhatsAppSelected = data.preferredContact.includes('whatsapp');
    if (isWhatsAppSelected && (!data.phone || data.phone.trim() === '')) {
      setError('phone' as any, {
        type: 'manual',
        message: 'Phone number is required when WhatsApp is selected.',
      });
      return;
    }

    clearErrors(['preferredContact' as any, 'phone' as any]);

    console.log('Submitting form with data:', data);

    const contactMethodsText = data.preferredContact.join(', ');

    emailjs
      .send(
        'service_vec1lic',
        'template_9mg856l',
        {
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          preferredContact: contactMethodsText,
          date: data.date
            ? new Date(data.date).toLocaleDateString('en-GB')
            : '',
          ceremonyLocation: data.ceremonyLocation,
          notice: data.notice,
        },
        'lP2sd_HVK-hsVAY2w'
      )
      .then(
        (result) => {
          console.log('✅ Email sent successfully:', result);
          alert('Thank you! Your message has been sent successfully.');
          reset();
        },
        (error) => {
          console.error('❌ EmailJS error:', error);
          alert(`Email failed: ${error.text || 'Unknown error'}. Please check your EmailJS configuration.`);
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

              {/* Блок выбора предпочтительного способа связи */}
              <FormControl component="fieldset" error={!!(errors as any).preferredContact} style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                <FormLabel component="legend" style={{ color: '#333', marginBottom: '5px' }}>
                  Preferred contact method:
                </FormLabel>
                <Controller
                  name="preferredContact" as any
                  control={control}
                  render={({ field }) => {
                    const currentValues: string[] = field.value || [];
                    
                    const handleCheck = (value: string) => {
                      if (currentValues.includes(value)) {
                        field.onChange(currentValues.filter((v) => v !== value));
                      } else {
                        field.onChange([...currentValues, value]);
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
