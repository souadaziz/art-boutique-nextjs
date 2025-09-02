import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation de l'email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Chemin vers le fichier de stockage des emails
    const emailsFilePath = path.join(process.cwd(), 'data', 'newsletter-emails.json');
    
    // Créer le dossier data s'il n'existe pas
    const dataDir = path.dirname(emailsFilePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Lire les emails existants ou créer un nouveau fichier
    let emails: string[] = [];
    if (fs.existsSync(emailsFilePath)) {
      const fileContent = fs.readFileSync(emailsFilePath, 'utf-8');
      emails = JSON.parse(fileContent);
    }

    // Vérifier si l'email existe déjà
    if (emails.includes(email)) {
      return NextResponse.json(
        { error: 'Cet email est déjà inscrit à notre newsletter' },
        { status: 409 }
      );
    }

    // Ajouter le nouvel email
    emails.push(email);

    // Sauvegarder dans le fichier
    fs.writeFileSync(emailsFilePath, JSON.stringify(emails, null, 2));

    // Log pour le développement
    console.log(`Nouvel abonnement newsletter: ${email}`);
    console.log(`Total d'abonnés: ${emails.length}`);

    return NextResponse.json(
      { message: 'Inscription réussie ! Merci de vous être abonné à notre newsletter.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'inscription newsletter:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'inscription' },
      { status: 500 }
    );
  }
}

// GET pour récupérer la liste des emails (pour usage administratif)
export async function GET() {
  try {
    const emailsFilePath = path.join(process.cwd(), 'data', 'newsletter-emails.json');
    
    if (!fs.existsSync(emailsFilePath)) {
      return NextResponse.json({ emails: [], count: 0 });
    }

    const fileContent = fs.readFileSync(emailsFilePath, 'utf-8');
    const emails = JSON.parse(fileContent);

    return NextResponse.json({
      emails: emails,
      count: emails.length
    });

  } catch (error) {
    console.error('Erreur lors de la récupération des emails:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
