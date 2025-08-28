import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Vérifier que la clé API est présente
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY manquante');
      return NextResponse.json(
        { error: 'Configuration email manquante' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { type, ...formData } = body;

    // Email de destination (l'artiste)
    const toEmail = 'souad0110@gmail.com';
    
    let subject = '';
    let htmlContent = '';

    if (type === 'commande') {
      // Formulaire de commande
      const { nom, email, telephone, adresse, ville, codePostal, pays, message, items, total } = formData;
      
      subject = `Nouvelle commande - ${total} MAD`;
      
      const itemsList = items.map((item: any) => 
        `<li>${item.artwork.title} (${item.quantity}x) - ${item.artwork.price * item.quantity} MAD</li>`
      ).join('');

      htmlContent = `
        <h2>Nouvelle commande reçue</h2>
        
        <h3>Informations client :</h3>
        <ul>
          <li><strong>Nom :</strong> ${nom}</li>
          <li><strong>Email :</strong> ${email}</li>
          <li><strong>Téléphone :</strong> ${telephone}</li>
          <li><strong>Adresse :</strong> ${adresse}</li>
          <li><strong>Ville :</strong> ${ville}</li>
          <li><strong>Code Postal :</strong> ${codePostal}</li>
          <li><strong>Pays :</strong> ${pays}</li>
        </ul>

        <h3>Œuvres commandées :</h3>
        <ul>
          ${itemsList}
        </ul>

        <h3>Total : ${total} MAD</h3>

        ${message ? `<h3>Message du client :</h3><p>${message}</p>` : ''}
      `;
    } else if (type === 'contact') {
      // Formulaire de contact
      const { name, email, subject: contactSubject, message } = formData;
      
      subject = `Nouveau message de contact - ${contactSubject}`;
      
      htmlContent = `
        <h2>Nouveau message de contact</h2>
        
        <h3>Informations :</h3>
        <ul>
          <li><strong>Nom :</strong> ${name}</li>
          <li><strong>Email :</strong> ${email}</li>
          <li><strong>Sujet :</strong> ${contactSubject}</li>
        </ul>

        <h3>Message :</h3>
        <p>${message}</p>
      `;
    } else {
      return NextResponse.json(
        { error: 'Type de formulaire non reconnu' },
        { status: 400 }
      );
    }

    // Log des données pour debug
    console.log('Tentative d\'envoi email:', { type, toEmail, subject });

    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Art Boutique <onboarding@resend.dev>', // Domaine par défaut pour les tests
      to: [toEmail],
      subject: subject,
      html: htmlContent,
      replyTo: type === 'commande' ? formData.email : formData.email,
    });

    if (error) {
      console.error('Erreur Resend détaillée:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
