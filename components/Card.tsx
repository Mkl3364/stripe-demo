import React from 'react';
import { Heart } from 'tabler-icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  useMantineTheme,
} from '@mantine/core';
import { useRouter } from 'next/router';
import ProductItem from '../pages/product/[id]';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: '500px'
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  id: number,
  image: string;
  title: string;
  description: string,
  prix: number
}

export function BadgeCard({ image, title, description, prix, id }: BadgeCardProps) {
  const { classes } = useStyles();
  const router = useRouter()

  const handleClick = () => {
    
    router.push(`/product/${id}`);
    
  }

  <ProductItem id={id} title={title} description={description} prix={prix} />

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Perfect for you, if you enjoy
        </Text>
        {prix}
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} onClick={handleClick}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <Heart size={18} className={classes.like} />
        </ActionIcon>
      </Group>
    </Card>
  );
}